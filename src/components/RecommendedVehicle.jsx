import React from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";
import { VehicleCard } from "./";
import { Link } from "react-router-dom";

const RecommendedVehicle = () => {
  const { vans } = useFetchVehicles();

  const recommendedVehicles = vans.slice(0, 2);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  

  return (
    <>
      <div>
        {recommendedVehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            width="w-auto"
            margin="my-5"
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="vehicles"
          onClick={handleLinkClick}
          className="bg-[#ff8c38] py-1 px-3 font-medium tracking-wide text-center text-lg"
        >
          Show More
        </Link>
      </div>
    </>
  );
};

export default RecommendedVehicle;
