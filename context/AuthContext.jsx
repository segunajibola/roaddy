import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../api";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  console.log("user in auth before signing in", user)
  // const createUser = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  // const signIn = (email, password) => {
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  // const logout = () => {
  //   return signOut(auth);
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    setPersistence(auth, browserLocalPersistence)
    .then(() => {
      // This is optional: you can handle the persistence configuration success here
      console.log("Persistence set to LOCAL");
    })
    .catch((error) => {
      // Handle persistence configuration errors here
      console.error("Error setting persistence:", error);
    });

    return () => {unsubscribe()};
  }, []);

  return (
    // <UserContext.Provider value={{ createUser, user, logout, signIn }}>
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

