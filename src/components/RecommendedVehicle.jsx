import React from "react";
import { VehicleCard } from "./";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const RecommendedVehicle = ({ vans, loading }) => {
  const recommendedVehicles = vans.slice(0, 2);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  if (loading)
    return (
      <div className="flex flex-col gap-y-3">
        <Skeleton className="w-full h-72" />
        <Skeleton className="w-full h-72" />
      </div>
    );

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
          className="bg-[#ff8c38] rounded-lg py-2 px-4 font-medium tracking-wide text-center text-lg hover:bg-[#e97f33]"
        >
          Show More
        </Link>
      </div>
    </>
  );
};

export default RecommendedVehicle;
