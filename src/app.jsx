import React, { useState, useEffect } from "react";
import { AppRouter } from "./routes.jsx";
import "aos/dist/aos.css";
import "react-loading-skeleton/dist/skeleton.css";

export const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <>
      <div className="min-h-[100svh] hidden md:flex text-center text-2xl px-8 justify-center items-center">
        There is no desktop version available for now, please check back later.
        Access the website on mobile phones or device with 767px width or below.
        Your current width is {windowWidth}px, reduce by {windowWidth - 767}px
      </div>
      <div className="md:hidden">
        <AppRouter />
      </div>
    </>
  );
};
