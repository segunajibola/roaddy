import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-container p-[26px]">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link
        to="/"
        className="inline-block w-full bg-[#161616] text-white text-center no-underline border-none px-[1.375rem] py-[0.75rem] font-bold rounded-[5px] cursor-pointer transition-transform duration-100 ease-in-out hover:translate-x-px hover:translate-y-px"
      >
        Return to Home
      </Link>
    </div>
  );
}
