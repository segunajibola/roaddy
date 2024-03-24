import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from "../context/AuthContext";

export default function NavBar() {
  const { user, handleSignOut } = useContext(UserContext);
  const [isHidden, setIsHidden] = useState(true);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const handleOverlayClick = () => {
    !isHidden ? setIsHidden(true) : null;
  };

  return (
    <header
      className="bg-[#ff8c38] flex items-center p-2.5"
    >
      <Link
        className="mr-auto uppercase font-black text-xl no-underline text-[#4d4d4d] px-2 py-1.5 hover:text-[#161616] hover:underline"
        to="/"
      >
        Roaddy
      </Link>
      <nav className="flex text-[15px] gap-[2px]">
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline text-[#4d4d4d] px-2 py-1.5 font-semibold hover:text-[#161616] hover:underline"
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline text-[#4d4d4d] px-2 py-1.5 font-semibold hover:text-[#161616] hover:underline"
        >
          About
        </NavLink>
        <NavLink
          to="/vehicles"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline text-[#4d4d4d] px-2 py-1.5 font-semibold hover:text-[#161616] hover:underline"
        >
          Vehicles
        </NavLink>

        <div
          className="flex items-center pr-1"
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          {user && (
            <div className="inline-flex items-center">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  className="h-[22.5px] w-[22.5px] rounded-[50%] border-2 border-solid border-[#4d4d4d]"
                />
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
            } fixed top-[70px] left-0 w-full h-full justify-center align-center z-10`}
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
