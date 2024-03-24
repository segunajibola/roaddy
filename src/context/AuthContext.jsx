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
import { auth } from "../../utils/api";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // console.log("user in auth before signing in", user);
  // const createUser = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  // const signIn = (email, password) => {
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  // const logout = () => {
  //   return signOut(auth);
  // };
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/host";

  const handleSignOut = () => {
    try {
      signOut(auth);
      navigate("/auth");
      console.log("Sign Out");
    } catch (error) {
      console.log("Sign out error", error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("signup");
    if (!formData.email || !formData.password) return;
    console.log(formData.email, formData.password);
    setStatus("creating");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("userCredential", userCredential);
      setStatus("idle");
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
      console.log("errorMessage", error.message);
      console.log("errorCode", error.code);
      setStatus("idle");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    console.log(formData.email, formData.password);
    setStatus("logging-in");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("userCredential", userCredential);
      setStatus("idle");
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
      console.log("errorMessage", error.message);
      console.log("errorCode", error.code);
      setStatus("idle");
    }
  };

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        // console.log(currentUser);
        setUser(currentUser);
      });

      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          // console.log("Persistence set to LOCAL");
        })
        .catch((error) => {
          console.error("Error setting persistence:", error);
        });

      return () => {
        unsubscribe();
      };
    } catch (error) {
      console.log("error in authChanged", error);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        handleSignOut,
        handleSignInWithGoogle,
        handleSignUp,
        handleSignIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
