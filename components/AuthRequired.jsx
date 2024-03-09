import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../api";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";

const navigate = useNavigate();

export default function AuthRequired({ children }) {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
    return () => unsubscribe();
  }, []);

  const location = useLocation();

  if (!user) {
    console.log("rann");
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
