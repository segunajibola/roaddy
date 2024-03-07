import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { loginUser, signInUser, createUser } from "../api";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { auth } from "../api";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/host";

  const provider = new GoogleAuthProvider();

  const handleSignInWithGoogle = async () => {
    try {
      // await setPersistence(auth, browserLocalPersistence);
      await setPersistence(auth, inMemoryPersistence)
        // .then(() => {
          // const provider = new GoogleAuthProvider();
          // In memory persistence will be applied to the signed in Google user
          // even though the persistence was set to 'none' and a page redirect
          // occurred.
          // return signInWithRedirect(auth, provider);
        // })
        // .catch((error) => {
          // Handle Errors here.
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        // });
      const res = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      const user = res.user;
      console.log("googleUser", user);
      navigate(from, { replace: true });
    } catch (error) {
      const errorCode = error.code;
      setError(error.message);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="login-container">
        {location.state?.message && (
          <h3 className="login-error">{location.state.message}</h3>
        )}
        <h1>
          {variant === "login"
            ? "Sign in to your account"
            : "Create a new account"}
        </h1>
        {/* {error?.message && <h3 className="login-error">{error.message}</h3>} */}
        {error && <h3 className="login-error">{error}</h3>}

        <div className="login-form">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={formData.email}
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={formData.password}
          />
          <button
            onClick={variant === "login" ? handleSignIn : handleSignUp}
            disabled={status === "logging-in"}
          >
            {status === "logging-in"
              ? "Logging in..."
              : status === "creating"
              ? "Creating an account..."
              : `${variant === "login" ? "Log in" : "Sign up"}`}
          </button>
        </div>
        <p>
          {variant === "login"
            ? `First time using Roaddy?${" "}`
            : `Already have an account?${" "}`}
          <span onClick={toggleVariant}>
            {variant === "login" ? "Create an account" : "Login"}
          </span>
        </p>
        <div>Sign in using:</div>
        <div>
          <FaGoogle onClick={handleSignInWithGoogle} />
        </div>
      </div>
    </>
  );
}
