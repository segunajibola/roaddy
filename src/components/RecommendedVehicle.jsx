import React from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";
import { VehicleCard } from "./";

const RecommendedVehicle = () => {
  const { vans } = useFetchVehicles();

  const recommendedVehicles = vans.slice(0, 3);

  return (
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
  );
};

export default RecommendedVehicle;
