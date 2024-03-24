import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeCarousel } from "../components";
import PopularVehicle from "../components/PopularVehicle";
import RecommendedVehicle from "../components/RecommendedVehicle";
import AOS from "aos";
import useFetchVehicles from "../hooks/useFetchVehicles";

export default function Home() {
  const { vans, loading } = useFetchVehicles();
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const brandLogo = [
    {
      link: "https://img.icons8.com/ios/icon/24749/amphibious-vehicle",
    },
    {
      link: "https://img.icons8.com/ios/icon/54502/logo",
    },
    {
      link: "https://img.icons8.com/ios/icon/24748/ski-vehicle",
    },
    {
      link: "https://img.icons8.com/ios/icon/UZPl1KrcP3q9/vehicle-tax",
    },
    {
      link: "https://img.icons8.com/ios/icon/54502/logo",
    },
  ];

  return (
    <div className="">
      <section className="home-container relative h-[350px] bg-[#fff7ed] bg-gradient-to-b from-black via-transparent to-transparefnt bg-no-repeat bg-center bg-cover text-white py-10 px-5 flex flex-col gap-y-4">
        <h1
          className="font-semibold text-2xl leading-10"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          You got a two-way trip, we got the vehicle.
        </h1>
        <p className="leading-6" data-aos="fade-up" data-aos-duration="1200">
          Relive the stress of jumping on buses. Rent the perfect car for your
          perfect road trip.
        </p>
        <Link
          to="vehicles"
          data-aos="fade-up"
          data-aos-duration="1800"
          onClick={handleLinkClick}
          className="inline-block text-center no-underline bg-[#ff8c38] border-none w-full mt-[27px] text-white font-semibold rounded-md cursor-pointer transition-transform duration-100 ease-in-out hover:transform hover:translate-x-.5 hover:translate-y-.5 p-[0.75rem] uppercase"
        >
          Find a vehicle
        </Link>
      </section>
      <section className="p-4" data-aos="fade-right">
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
      <section className="p-4" data-aos="fade-up">
        <div className="flex justify-between font-semibold text-xl my-5">
          <p className="">Popular Vehicle</p>
          <Link className="underline" to="vehicles">
            View all
          </Link>
        </div>
        <PopularVehicle />
      </section>
      <section className="px-4 py-6" data-aos="fade-up">
        <p className="font-semibold text-xl my-5">
          Recommended Vehicle
        </p>
        <RecommendedVehicle vans={vans} loading={loading} />
      </section>
      <section className="px-4 py-28 bg-gray-800 text-[#ff8c38]">
        <h3 className="font-semibold text-2xl my-5 text-center">Brands that trust us</h3>
        <div className="flex gap-x-3 justify-center items-center my-12">
          {brandLogo.map((logo) => (
            <img src={logo.link} alt="" srcset="" className="w-10 h-10 shadow-md shadow-[#ff8c38] p-1 rounded-md bg-gray-50" />
          ))}
        </div>
      </section>
    </div>
  );
}
