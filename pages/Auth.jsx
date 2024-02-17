import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { loginUser, signInUser, createUser } from "../api";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../api";

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

  const handleSignUp = async (e) => {
    e.preventDefault();
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
      navigate(from, { replace: true })
    } catch (error) {
      setError(error.message);
      console.log(error.code, error.message);
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
      navigate(from, { replace: true })
    } catch (error) {
      setError(error.message);
      console.log(error.code, error.message);
      setStatus("idle");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {location.state?.message && (
        <h3 className="login-error">{location.state.message}</h3>
      )}
      <h1>
        {variant === "login"
          ? "Sign in to your account"
          : "Create a new account"}
      </h1>
      {error?.message && <h3 className="login-error">{error.message}</h3>}

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
    </div>
  );
}
