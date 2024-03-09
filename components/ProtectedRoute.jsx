import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    console.log("no user");
    return (
      <Navigate
        to="/auth"
        state={{
          message: "You must log in first",
          from: location.pathname,
        }}
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoute;
