import React, { useState, useCallback, useContext } from "react";
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
      <div className="flex flex-col items-center p-[27px]">
        {location.state?.message && (
          <h3 className="text-red">{location.state.message}</h3>
        )}
        <h1 className="text-xl my-5">
          {variant === "login"
            ? "Sign in to your account"
            : "Create a new account"}
        </h1>
        {/* {error?.message && <h3 className="text-red">{error.message}</h3>} */}
        {error && <h3 className="text-red">{error}</h3>}

        <div className="flex flex-col w-full max-w-[500px]">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={formData.email}
            className="h-[40px] indent-2.5 font-normal border border-gray-300 shadow-sm focus:outline-none rounded-t-md"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={formData.password}
            className="h-[40px] indent-2.5 font-normal border border-gray-300 shadow-sm focus:outline-none rounded-b-md border-t-0"
          />
          <button
            onClick={variant === "login" ? handleSignIn : handleSignUp}
            disabled={status === "logging-in"}
            className="bg-[#ff8c38] border-none rounded-md h-[55px] mt-[22px] text-white cursor-pointer disabled:bg-[#aaaaaa] disabled:cursor-not-allowed"
          >
            {status === "logging-in"
              ? "Logging in..."
              : status === "creating"
              ? "Creating an account..."
              : `${variant === "login" ? "Log in" : "Sign up"}`}
          </button>
        </div>
        <p className="my-5 text-xl">
          {variant === "login"
            ? `First time using Roaddy?${" "}`
            : `Already have an account?${" "}`}
          <span onClick={toggleVariant} className="underline">
            {variant === "login" ? "Create an account" : "Login"}
          </span>
        </p>
        {/* <div className="text-lg">Sign in using:</div> */}
        <div>
          <img
            src="https://github.com/segunajibola/image-host/blob/main/google/signInweb_dark_rd_SI@1x.png?raw=true"
            alt="Sign In With Google"
            onClick={handleSignInWithGoogle}
          />
        </div>
      </div>
    </>
  );
}
