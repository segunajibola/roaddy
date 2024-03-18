import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-[#aaaaaa] p-5 flex flex-col font-normal">
      <div className="flex flex-col md:flex-row w-full gap-y-3">
        <div className="md:w-[50%]">
          <h3>ROADDY</h3>
          <p className="md:mt-7">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex justify-between md:ml-20 max-md:w-[80%]">
          <div className="md:mx-6">
            <h4 className="my-4">About</h4>
            <ul className="space-y-3">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relations</li>
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
        <div className="md:mx-4">
          <h4 className="my-4">Community</h4>
          <ul className="space-y-3">
            <li>Events</li>
            <li>Blogs</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </div>
      </div>
      <hr className="hidden md:block my-4" />
      <div className="sm:flex justify-between items-center">
        <div className="flex justify-between my-5 sm:w-[45%] md:w-[35%] order-1 sm:order-2">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
        <div className="order 2 sm:order-1">
          &#169; {new Date().getFullYear()} #VANLIFE. All right reserved
        </div>
      </div>
    </footer>
  );
}
