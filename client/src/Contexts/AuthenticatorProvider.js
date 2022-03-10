import React, { useState, useContext, useEffect } from "react";
import { getLoggedUser } from "../Services/authService"

export const AuthenticatorContext = React.createContext();

const AuthenticatorProvider = ({ children }) => {
  const [authData, setAuthData] = useState("");

  useEffect(() => {
    async function load() {
      const data = await getLoggedUser()
      if (data) {
        login(data)
      }
    }
    load()
  }, [])

  const login = (data) => setAuthData(data);

  const logout = () => setAuthData("");

  const value = {
    authData, // info usuario
    login,
    logout
  };

  return (
    <AuthenticatorContext.Provider value={value}>
      {children}
    </AuthenticatorContext.Provider>
  );
};

export const useAuthenticator = () => {
  return useContext(AuthenticatorContext);
};

export default AuthenticatorProvider;
