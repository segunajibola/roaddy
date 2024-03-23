import React from "react";
import { VehicleCard } from "./";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RecommendedVehicle = ({ vans, loading }) => {
  const recommendedVehicles = vans.slice(0, 2);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  if (loading)
    return (
        <Skeleton height={320} width={300} />
    );

  return (
    <>
      <div>
        {recommendedVehicles.map((vehicle) =>
          loading ? (
            // <div className="flex gap-y-3 overflow-hidden">
            <h1>Loading</h1>
            // <Skeleton height={320} width={300} />
          ) : (
            // </div>
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              width="w-auto"
              margin="my-5"
            />
          )
        )}
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="vehicles"
          onClick={handleLinkClick}
          className="bg-[#ff8c38] py-1 px-3 font-medium tracking-wide text-center text-lg hover:bg-[#e97f33]"
        >
          Show More
        </Link>
      </div>
    </>
  );
};

export default RecommendedVehicle;
