import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-[#aaaaaa] p-2 flex shrink-0 justify-center items-center font-normal">
      <div className="grid grid-row s-4 w-full p-3 gap-y-3 bg-red-500">
        <div className="bg-red-50">
          <h3>ROADDY</h3>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex justify-between bg-red-50">
          <div>
            <h4 className="my-4">About</h4>
            <ul>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relations</li>
            </ul>
          </div>
          <div>
            <h4 className="my-4">Social</h4>
            <ul>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="my-4">Community</h4>
          <ul>
            <li>Events</li>
            <li>Blogs</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </div>
        <div className="bg-red-50 items-end">
          <div className="flex justify-between">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
          </div>
          <div>
            &#169; {new Date().getFullYear()} #VANLIFE. All right reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
