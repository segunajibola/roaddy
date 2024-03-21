import React from "react";
import bgImg from "../assets/images/about-hero.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mx-[2%]">
      <img src="/assets/images/rent.jpg" className="max-w-full mb-3" />
      <div className="px-6 text-[#161616] my-8">
        <h1 className="leading-6">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="leading-6">
          Our mission is to enliven your road trip with the perfect travel
          vehicle rental. Our cars are recertified before each trip to ensure
          your travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="leading-6">
          Our team is full of people who know firsthand the magic of touring the
          world on 4 wheels.
        </p>
      </div>
      <div className="bg-[#ffcc8d] text-[#161616] px-8 pb-8 mx-7 rounded-md">
        <h2 className="py-8">
          Your destination is waiting.
          <br />
          Your vehicle is ready.
        </h2>
        <Link
          className="py-4 px-5 bg-[#161616] text-white rounded-[10px]"
          to="/vans"
        >
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
