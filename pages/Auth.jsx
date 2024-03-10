import React, { useState, useCallback, useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { UserContext } from "../context/AuthContext";

export default function Login() {
  const { handleSignInWithGoogle, handleSignUp, handleSignIn } =
    useContext(UserContext);

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
