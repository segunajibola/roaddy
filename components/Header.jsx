import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";
import { signOut } from "firebase/auth";
import { auth } from "../api";

export default function Header({ user }) {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  const handleSignOut = () => {
    try {
      signOut(auth);
      console.log("Sign Out");
    } catch (error) {
      console.log("Sign out error", error);
    }
  };

  //   console.log("user.photoUrl", user.photoUrl)

  return (
    <header>
      <Link className="site-logo" to="/">
        Roaddy
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        {user && (
          <>
            {user.photoURL ? <Link to="auth" className="login-link">
              <img src={user.photoURL} className="login-photo" />
            </Link> : ""}
            <button onClick={handleSignOut} className="logout-icon">Log out</button>
          </>
        )}
      </nav>
    </header>
  );
}
