import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from "../context/AuthContext";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { user, handleSignOut } = useContext(UserContext);
  const [isHidden, setIsHidden] = useState(true);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);


  const handleOverlayClick = () => {
    !isHidden ? setIsHidden(true) : null;
  };

  return (
    <header
      className={`fixed z-10 bg-[#ff8c38] w-full ${visible ? '' : '-translate-y-full'} transition-transform duration-300 ease-in-out flex items-center p-3 text-gray-100 font-semibold`}
    >
      <Link
        className="mr-auto uppercase font-black text-xl no-underline px-2 py-1.5 hover:text-gray-200 hover:underline"
        to="/"
      >
        Roaddy
      </Link>
      <nav className="flex text-[15px] gap-[2px]">
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline px-2 py-1.5 hover:text-gray-200 hover:underline"
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline px-2 py-1.5 hover:text-gray-200 hover:underline"
        >
          About
        </NavLink>
        <NavLink
          to="/vehicles"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline px-2 py-1.5 hover:text-gray-200 hover:underline"
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
