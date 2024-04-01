import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HomeCarousel } from "../components";
import {
  PopularVehicle,
  RecommendedVehicle,
  Testimonials,
} from "../components/";
import AOS from "aos";
import useFetchVehicles from "../hooks/useFetchVehicles";
import { brandLogo } from "../utils/data";
import { UserContext } from "../context/AuthContext";
import { handleLinkClick } from "../utils/funcs";
import FAQ from "../components/FAQs";

export default function Home() {
  const { vans, loading } = useFetchVehicles();
  const { user } = useContext(UserContext);
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

  const backgroundImageUrlsArray = [
    'url("https://images.unsplash.com/photo-1572023165258-a0d4007f0b98")',
    'url("https://images.unsplash.com/photo-1600832782030-4e31b02c8a98")',
    'url("https://images.unsplash.com/photo-1631682824839-0447cfcb2f93")',
    // Add more image URLs as needed
  ];
  const randomIndex = Math.floor(
    Math.random() * backgroundImageUrlsArray.length
  );
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(
    backgroundImageUrlsArray[randomIndex]
  );

  const changeBackgroundImage = () => {
    setBackgroundImageUrl(backgroundImageUrlsArray[randomIndex]);
  };

  useEffect(() => {
    const intervalId = setInterval(changeBackgroundImage, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
      <section
        className="homde-container relative h-[70vh] bfg-[#fff7ed] bg-gradient-to-b from-black via-transparent to-transparefnt bg-no-repeat bg-top bg-cover text-xl py-10 flex flex-col text-center items-center justify-center gap-y-4 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: backgroundImageUrl,
        }}
      >
        <h1
          className="font-semibold text-5xl mt-12 text-shadow p-2"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          You got a two-way trip, we got the vehicle.
        </h1>
        <p
          className="bg-[#f4e9e1] py-3 px-1.5 text-shadow text-gray-900 text-2xl shadow-xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Relive the stress of jumping on buses. Rent the perfect car for your
          perfect road trip.
        </p>
        <Link
          to="vehicles"
          data-aos="fade-up"
          data-aos-duration="1800"
          onClick={handleLinkClick}
          className="flex justify-center items-center text-center no-underline bg-[#ff8c38] border-none mt-[27px] text-white px-6 py-3 font-semibold rounded-full cursor-pointer transition-transform duration-100 ease-in-out hover:bg-[#da7731] hover:transform hover:translate-x-.5 hover:translate-y-.5 uppercase"
        >
          Find a vehicle
        </Link>
      </section>
      <section className="p-4" data-aos="fade-right">
        <h2 className="text-5xl w-1/2 my-10">
          Three steps to <span className="text-[#ff8c38]">rent a vehicle</span>
        </h2>
        <p className="mt-5 text-lg">
          Find out how you can rent a vehicle from anyone or partners in just
          few hours.
        </p>
        <HomeCarousel />
        <div
          onClick={handleLinkClick}
          className="flex justify-center items-center text-center tracking-wider mt-14 font-semibold text-white"
        >
          {!user ? (
            <Link
              to="host"
              className="bg-[#ff8c38] p-4 rounded-xl w-40"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              GET STARTED
            </Link>
          ) : (
            <Link
              to="host"
              className="bg-[#ff8c38] p-4 rounded-xl w-40"
              data-aos="fade-up"
            >
              View Dashboard
            </Link>
          )}
        </div>
      </section>
      <section className="p-4" data-aos="fade-up">
        <div className="flex justify-between font-semibold text-xl my-5">
          <p className="">Popular Vehicles</p>
          <Link className="underline" to="vehicles">
            View all
          </Link>
        </div>
        <PopularVehicle vans={vans} loading={loading} />
      </section>
      <section className="px-4 py-6" data-aos="fade-up">
        <p className="font-semibold text-xl my-5">Recommended Vehicles</p>
        <RecommendedVehicle vans={vans} loading={loading} />
      </section>
      <section className="px-4 py-28 bg-gray-800 text-[#ff8c38]">
        <h3 className="font-semibold text-3xl my-5 text-center">
          Brands that trust us
        </h3>
        <div className="flex gap-x-3 justify-center items-center my-12">
          {brandLogo.map((logo) => (
            <div key={logo.id}>
              <img
                src={logo.link}
                alt=""
                className="w-10 h-10 shadow-md shadow-[#ff8c38] p-1 rounded-md bg-gray-50"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 py-8">
        <h3 className="font-semibold text-3xl my-8 text-center">
          What people are saying about us
        </h3>
        <Testimonials />
      </section>
      <section className="px-4 py-8">
        <h3 className="font-semibold text-3xl my-8 text-center">
          Frequently Asked Questions
        </h3>
        <FAQ />
      </section>
    </div>
  );
}
