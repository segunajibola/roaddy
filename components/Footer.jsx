import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-[#aaaaaa] h-[74px] flex shrink-0 justify-center items-center m-auto font-medium">
      &#169; {new Date().getFullYear()} #VANLIFE
    </footer>
  );
}
