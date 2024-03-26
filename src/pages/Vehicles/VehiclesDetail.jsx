import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVan } from "../../../utils/api";
import { PopularVehicle, Loading } from "../../components";
import useFetchVehicles from "../../hooks/useFetchVehicles";
import { handleLinkClick } from "../../../utils/funcs";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const {
    imageUrl,
    name,
    price,
    type,
    description,
    capacity,
    transmission,
    fuel,
  } = van || {};
  const { vans, loading, setLoading } = useFetchVehicles();

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const search = location.state?.search || "";
  const vehicleType = location.state?.type || "all";

  return (
    <div className="px-4 pt-20">
      <Link to={`..${search}`} relative="path" className="no-underline">
        &larr;{" "}
        <span className="underline text-[1.25rem]">
          Back to {vehicleType} vehicles
        </span>
      </Link>

      {van && (
        <div className="flex flex-col text-[#161616] gap-y-3">
          <img
            src={imageUrl}
            className="rounded-[5px] m-1 mt-4 h-[60vh] object-cover object-center"
          />

          <div className="flex items-center justify-between">
            <h2 className="text-[2rem] mb-2">{name}</h2>
            <div className="flex items-center justify-between gap-x-[5px]">
              <p className="italic rounded-[10px] bg-[#ff8c38] text-white px-[6px] py-[5px]">
                {type}
              </p>
              <p className="rounded-[10px] bg-[#ff8c38] text-white px-[6px] py-[5px]">
                <span>${price}</span>/day
              </p>
            </div>
          </div>
          <p className="text-lg">{description}</p>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="flex justify-between gap-x-6 items-center">
              <span className="text-[1.25rem]">Type Car</span>
              <span className="capitalize font-semibold">{type}</span>
            </div>
            <div className="flex justify-between gap-x-6 items-center">
              <span className="text-[1.25rem]">Capacity</span>
              <span className="capitalize font-semibold">
                {capacity}
                {capacity > 1 ? " Persons" : " Person"}{" "}
              </span>
            </div>
            <div className="flex justify-between gap-x-6 items-center">
              <span className="text-[1.25rem]">Steering</span>
              <span className="capitalize font-semibold">{transmission}</span>
            </div>
            <div className="flex justify-between gap-x-6 items-center">
              <span className="text-[1.25rem]">Fuel</span>
              <span className="capitalize font-semibold">{fuel} Liters</span>
            </div>
          </div>
          <div className="flex justify-between items-center w-full my-5">
            <div className="text-[2rem]">${price}/day</div>
            <Link to="rent" onClick={handleLinkClick} className="text-white text-[1.2rem] bg-[#ff8c38] uppercase font-bold p-2 rounded-md w-[40%]">
              Rent this van
            </Link>
          </div>
        </div>
      )}

      {/* Vehicles Reviews */}

     <section className="mb-5" data-aods="fade-up">
        <div className="flex justify-between font-semibold text-xl my-5">
          <p className="">Browse Vehicles</p>
          <Link className="underline" to="vehicles">
            View all
          </Link>
        </div>
        <PopularVehicle vans={vans} loading={loading} />
      </section>
    </div>
  );
}
