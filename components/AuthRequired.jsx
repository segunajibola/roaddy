import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired({ user }) {
  const location = useLocation();

  if (!user) {
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
  
  return <Outlet context={user} />;
}
