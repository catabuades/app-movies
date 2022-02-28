import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuthenticator } from "../../Contexts/AuthenticatorProvider";

const RequireAuth = ({ children }) => {
  const { authData } = useAuthenticator();
  const location = useLocation();

  if (!authData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
