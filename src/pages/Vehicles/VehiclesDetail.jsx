import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVan } from "../../../utils/api";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const { imageUrl, name, price, type, description, capacity, transmission, fuel } = van || {};

  React.useEffect(() => {
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
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was ane error: {error.message}</h1>;
  }

  const search = location.state?.search || "";
  const vehicleType = location.state?.type || "all";

  return (
    <div className="px-4 pt-20">
      <Link to={`..${search}`} relative="path" className="no-underline">
        &larr; <span className="underline">Back to {vehicleType} vans</span>
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
              <p className="italic rounded-[10px] bg-[#bd3737] text-white px-[6px] py-[5px]">
                {type}
              </p>
              <p className="rounded-[10px] bg-[#bd3737] text-white px-[6px] py-[5px]">
                <span>${price}</span>/day
              </p>
            </div>
          </div>
          <p className="text-lg">{description}</p>
          <div className="grid grid-cols-2">
            <div className="flex justify-between gap-x-6">
              <span>Type Car</span>
              <span className="capitalize">{type}</span>
            </div>
            <div className="flex justify-between gap-x-6">
              <span>Capacity</span>
              <span className="capitalize">{capacity}{capacity > 1 ? " Persons" : " Person"} </span>
            </div>
            <div className="flex justify-between gap-x-6">
              <span>Steering</span>
              <span className="capitalize">{transmission}</span>
            </div>
            <div className="flex justify-between gap-x-6">
              <span>Fuel</span>
              <span className="capitalize">{fuel} Liters</span>
            </div>
          </div>
          <button className="text-white text-[1.125rem] bg-[#ff8c38] p-4 rounded-md">
            Rent this van
          </button>
        </div>
      )}
    </div>
  );
}
