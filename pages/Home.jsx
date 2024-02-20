import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container relative h-[350px] bg-gradient-to-b from-black via-transparent to-transparent bg-no-repeat bg-center bg-cover text-white py-10 px-5 flex flex-col gap-y-4">
      <h1 className="font-semibold text-2xl leading-10">
        You got a two-way trip, we got the vehicle.
      </h1>
      <p className="leading-6">
        Relive the stress of jumping on buses. Rent the perfect car for your
        perfect road trip.
      </p>
      <Link
        to="vehicles"
        className="inline-block text-center no-underline bg-[#ff8c38] border-none w-full mt-[27px] text-white font-semibold rounded-md cursor-pointer transition-transform duration-100 ease-in-out hover:transform hover:translate-x-.5 hover:translate-y-.5"
      >
        Find your car
      </Link>
    </div>
  );
}
