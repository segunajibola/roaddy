import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mt-16">
      <img src="/about-hero.png" className="max-w-full mb-3" />
      <div className="text-[#161616] text-xl px-3 my-8 space-y-4">
        <h1 className="text-3xl">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="">
          Our mission is to enliven your road trip with the perfect travel
          vehicle rental. Our vehicles are recertified before each trip to ensure
          your travel plans can go off without any hitch.
        </p>
        <p className="">
          Our team is full of people who know firsthand the magic of touring the
          world on 4 wheels.
        </p>
      </div>
      <div className="bg-[#ffcc8d] text-[#161616] px-8 py-16 rounded-md">
        <h2 className="py-8 text-3xl">
          Your destination is waiting.
          <br />
          Your vehicle is ready.
        </h2>
        <Link
          className="py-4 px-5 bg-[#ff8c38] uppercase font-semibold tracking-wider text-white rounded-[10px]"
          to="/vans"
        >
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
