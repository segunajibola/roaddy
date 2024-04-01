import React from "react";
import { Link } from "react-router-dom";
import { handleLinkClick } from "../utils/funcs";

export default function Footer() {
  return (
    <footer
      data-aosf="fade-up"
      data-aofs-duration="200"
      className="bg-[#ff8c38] text-gray-800 text-lg p-5 flex flex-col font-normal"
    >
      <div className="flex flex-col md:flex-row w-full gap-y-3">
        <div className="md:w-[50%]">
          <h3 className="font-semibold text-xl">ROADDY</h3>
          <p className="md:mt-7">
            Our vision is to provide convenience to you as you move.
          </p>
        </div>
        <div className="flex justify-between md:ml-20 max-md:w-[80%]">
          <div className="md:mx-6">
            <h4 className="my-4">Company</h4>
            <ul className="space-y-3">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relations</li>
              <li>Mission & Vision</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="md:mx-6">
            <h4 className="my-4">Social</h4>
            <ul className="space-y-3">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between md:ml-20 max-md:w-[80%]">
          <div className="md:mx-4">
            <h4 className="my-4">Community</h4>
            <ul className="space-y-3">
              <li>Events</li>
              <li>Blogs</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="md:mx-4">
            <h4 className="my-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
              </li>
              <li>
                <Link to="/vehicles" onClick={handleLinkClick}>Vehicles</Link>
              </li>
              <li>
                <Link to="/host" onClick={handleLinkClick}>Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="hidden md:block my-4 border-black" />
      <div className="sm:flex justify-between items-center">
        <div className="flex justify-between my-5 sm:w-[45%] md:w-[35%] order-1 sm:order-2">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
        <div className="order 2 sm:order-1">
          &#169; {new Date().getFullYear()} #ROADDY. All right reserved
        </div>
      </div>
    </footer>
    // eaed5558-9270-4a1b-b9a3-24028e553ce4 token
    // 3f262260f67063cc2633096cf0197d77 secret
  );
}
