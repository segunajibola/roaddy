import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vehicles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const typeFilter = searchParams.get("type");

  console.log("searchParams", searchParams);
  console.log("typeFilter", typeFilter);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        console.log("data", data);
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="w-full">
      <Link
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
        className="text-[#161616]  text-decoration: none"
      >
        <img
          src={van.imageUrl}
          className="w-full rounded-[10px] h-[50vh] object-cover object-center"
        />
        <div className="flex justify-between items-center">
          <h3>{van.name}</h3>
          <div className="flex justify-between items-center gap-x-1">
            <p className="rounded-[10px] bg-[#bd3737] text-white px-[6px] py-[5px]">
              ${van.price}
              <span>/day</span>
            </p>
            <i
              className={`h-8 px-6 py-1.5 font-medium rounded-md bg-[#ffead0] text-[#4d4d4d] transition duration-200 ease-in-out focus:outline-none focus:ring focus:border-orange-800 ${van.type}`}
            >
              {van.type}
            </i>
          </div>
        </div>
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
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="p-6">
      <h1>Explore our van options</h1>
      <div className="flex wrap gap-2">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`h-8 px-6 py-1.5 font-medium rounded-md bg-[#ffead0] text-[#4d4d4d] transition duration-200 ease-in-out focus:outline-none focus:ring focus:border-orange-800 hover:bg-[#e17654] ${
            typeFilter === "simple" ? "bg-[#e17654]" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`h-8 px-6 py-1.5 font-medium rounded-md bg-[#ffead0] text-[#4d4d4d] transition duration-200 ease-in-out focus:outline-none focus:ring focus:border-orange-800 hover:bg-[#115e59] 
                        ${typeFilter === "luxury" ? "bg-[#115e59]" : ""}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`h-8 px-6 py-1.5 font-medium rounded-md bg-[#ffead0] text-[#4d4d4d] transition duration-200 ease-in-out focus:outline-none focus:ring focus:border-orange-800 hover:bg-[#161616] 
                        ${typeFilter === "rugged" ? "bg-[#161616]" : ""}`}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="h-8 px-6 py-1.5 font-medium rounded-md border-none bg-[#ffead0] text-[#4d4d4d] underline bg-transparent transition duration-200 ease-in-out focus:outline-none focus:ring focus:border-orange-800 clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-5 mt-14">
        {vanElements}
      </div>
    </div>
  );
}
