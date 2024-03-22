import React from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";
import VehicleCard from "./VehicleCard";

const RecommendedVehicle = () => {
  const { vans } = useFetchVehicles();

  return (
    <div>
      {vans.map((van) => (
        <VehicleCard key={van.id} van={van} width="w-auto" margin="my-5" />
      ))}
    </div>
  );
};

export default RecommendedVehicle;
