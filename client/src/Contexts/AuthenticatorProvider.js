import React, { useState, useContext } from "react";

export const AuthenticatorContext = React.createContext();

const AuthenticatorProvider = ({ children }) => {
  const [authData, setAuthData] = useState("");

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
