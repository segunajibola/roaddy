import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <main className="mb-[84px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
