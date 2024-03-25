import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVan } from "../../utils/api";
import { PopularVehicle, Loading } from "../components";
import useFetchVehicles from "../hooks/useFetchVehicles";

export default function Rental() {
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
    return <Loading />;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="pt-20 px-4">
      <div className="my-3">
        <h1 className="text-2xl my-3">Rental Summary</h1>
        <p className="text-xl">
          Prices may change depending on the duration of the rented vehicle.
        </p>
        <div className="flex gap-3 my-10">
          <div className="w-[50%]">
            <img src={imageUrl} alt="" className="w-full h-40 object-cover object-center rounded-xl" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl">{name}</h2>
            <span className="text-[1.10rem]">440+ Reviewers</span>
          </div>
        </div>
        <div className="my-5 flex flex-col  gap-y-3">
          <div className="flex justify-between items-center">
            <span className="text-lg">Sub Total</span>
            <span className="text-3xl">$2</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg">Tax</span>
            <span className="text-3xl">$2</span>
          </div>
        </div>
        <div className="flex rounded-xl mb-4">
          <input
            type="text"
            placeholder="Apply promo code"
            className="w-[80%] bg-gray-200 rounded-l-xl p-3"
          />
          <button className="bg-[#ff8c38] w-[20%] rounded-r-xl">Apply</button>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">Total Rental Price</h3>
          <span className="text-5xl">$2</span>
        </div>
      </div>
    </div>
  );
}
