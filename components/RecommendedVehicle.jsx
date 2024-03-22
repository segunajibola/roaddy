import React from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";

const RecommendedVehicle = () => {
  const { vans } = useFetchVehicles();

  return (
    <div>
      {vans.map((van) => (
        <div
          className="w-auto h-auto flex-shrink-0 mx-3 my-8 border-none outline-none rounded-b-xl text-gray-900 bg-white shadow-md"
          key={van.id}
        >
          <div className="relative block w-full h-[250px] aspect-w-16 aspect-h-9">
            <img
              src={van.imageUrl}
              loading="lazy"
              className="w-full h-full object-cover rounded-t-xl"
              alt="Images"
            />
          </div>
          <div className="flex justify-between items-center m-1 py-2">
            <h3 className="font-semibold text-lg">{van.name}</h3>
            <p className="rounded-[10px] bg-[#ffead0] px-[6px] py-1.5">
              ${van.price}
              <span>/day</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedVehicle;
