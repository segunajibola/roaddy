import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetchVehicles from "../../hooks/useFetchVehicles";
import { Loading, VehicleCard } from "../../components";

export default function Vehicles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const { vans, loading, error } = useFetchVehicles();

  const displayedVehicle = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vehiclesElement = displayedVehicle.map((vehicle) => (
    <div key={vehicle.id} className="w-full">
      <Link
        to={vehicle.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
        className="text-[#161616]  text-decoration: none"
      >
        <VehicleCard vehicle={vehicle} />
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <div className="p-6 pt-16">
        <h1 className="text-3xl my-2 font-semibold mb-4">Explore vehicle options</h1>
        <div className="flex wrap gap-2">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`h-8 px-3 py-1 font-medium rounded-md bg-orange-200 text-[#4d4d4d] transition duration-200 ease-in-out focus:outline-none focus:ring focus:border-orange-800 hover:bg-orange-400 ${
              typeFilter === "simple"
                ? "text-white bg-orange-600 hover:bg-orange-700"
                : ""
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`h-8 px-3 py-1 font-medium rounded-md bg-orange-200 text-[#4d4d4d] transition duration-200 ease-in-out focus:outline-none focus:ring focus:border-orange-800 hover:bg-orange-400 ${
              typeFilter === "luxury"
                ? "text-white bg-orange-600 hover:bg-orange-700"
                : ""
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`h-8 px-3 py-1 font-medium rounded-md bg-orange-200 text-[#4d4d4d] transition duration-200 ease-in-out focus:outline-none focus:ring focus:border-orange-800 hover:bg-orange-400 ${
              typeFilter === "rugged"
                ? "text-white bg-orange-600 hover:bg-orange-700"
                : ""
            }`}
          >
            Rugged
          </button>

          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="h-8 px-2 py-1 font-medium rounded-md border-none text-[#4d4d4d] underline bg-transparent"
            >
              Clear filter
            </button>
          ) : null}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5 mt-10">
          {vehiclesElement}
        </div>
      </div>
    </>
  );
}
