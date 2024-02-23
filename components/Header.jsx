import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../api";
import { BiChevronDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

export default function Header({ user }) {
  const [isHidden, setIsHidden] = useState(true);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  // function fakeLogOut() {
  //   localStorage.removeItem("loggedin");
  // }

  const handleSignOut = () => {
    try {
      signOut(auth);
      console.log("Sign Out");
    } catch (error) {
      console.log("Sign out error", error);
    }
  };

  //   console.log("user.photoUrl", user.photoUrl)

  const handleOverlayClick = () => {
    !isHidden ? setIsHidden(true) : null;
  };

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
          to="/vehicles"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>

        <div
          className="flex items-center pr-1"
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          {user && (
            <div className="login-link">
              {user.photoURL ? (
                <img src={user.photoURL} className="login-photo" />
              ) : (
                <div className="w-4 h-8 rounded-full bg-orange-500">
                  <FaUserCircle />
                </div>
              )}
              <BiChevronDown
                size={20}
                className={`${isHidden ? "rotate-0" : "rotate-180"}`}
              />
            </div>
          )}

          <div
            className={`${
              isHidden ? "hidden" : "flex"
            } fixed top-[70px] left-0 w-full h-full justify-center align-center`}
            onClick={handleOverlayClick}
          >
            <div className="bg-white shadow-md w-2/12 absolute z-10 right-[1rem] p-1">
              <span
                className="flex justify-end cursor-pointer"
                onClick={() => setIsHidden(true)}
              >
                X
              </span>
              <div
                className={`${
                  isHidden ? "hidden" : "flex"
                } flex-col justify-center items-start px-1 text-base text-left`}
              >
                {/* <Link
                  to="/profile"
                  style={{
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  View full profile
                </Link> */}
                <button type="button" onClick={handleSignOut}>
                  Logout
                </button>
                {/* <Link
                  to="/setting"
                  style={{
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  Settings
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
