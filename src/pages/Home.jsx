import React from "react";
import { Link } from "react-router-dom";
import { HomeCarousel } from "../components";
import PopularVehicle from "../components/PopularVehicle";
import RecommendedVehicle from "../components/RecommendedVehicle";

export default function Home() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="">
      <section className="home-container relative h-[350px] bg-[#fff7ed] bg-gradient-to-b from-black via-transparent to-transparefnt bg-no-repeat bg-center bg-cover text-white py-10 px-5 flex flex-col gap-y-4">
        <h1 className="font-semibold text-2xl leading-10">
          You got a two-way trip, we got the vehicle.
        </h1>
        <p className="leading-6">
          Relive the stress of jumping on buses. Rent the perfect car for your
          perfect road trip.
        </p>
        <Link
          to="vehicles"
          onClick={handleLinkClick}
          className="inline-block text-center no-underline bg-[#ff8c38] border-none w-full mt-[27px] text-white font-semibold rounded-md cursor-pointer transition-transform duration-100 ease-in-out hover:transform hover:translate-x-.5 hover:translate-y-.5 p-[0.75rem] uppercase"
        >
          Find a vehicle
        </Link>
      </section>
      <section className="p-4">
        <h2 className="text-5xl w-1/2 my-10">
          Three steps to <span className="text-[#ff8c38]">rent a vehicle</span>
        </h2>
        <p className="my-5 text-lg">
          Find out how you can rent a vehicle from anyone or partners in just
          few hours.
        </p>
        <button className="bg-[#ff8c38] p-3 text-white rounded-2xl mt-5 tracking-wider font-semibold">
          GET STARTED
        </button>
        <HomeCarousel />
      </section>
      <section className="p-4">
        <div className="flex justify-between font-semibold text-xl my-5">
          <p className="">Popular Vehicle</p>
          <Link className="underline" to="vehicles">
            View all
          </Link>
        </div>
        <PopularVehicle />
      </section>
      <section className="p-4">
        <p className="flex justify-between font-semibold text-xl my-5">
          Recommended Vehicle
        </p>
        <RecommendedVehicle />
      </section>
      <section className="p-4">

      </section>
    </div>
  );
}
