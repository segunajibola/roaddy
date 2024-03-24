import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getHostVehicle } from "../../utils/api";
import { UserContext } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

export default function HostLayout() {
  const { user } = useContext(UserContext);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const hostVehicle = async () => {
      try {
        const data = await getHostVehicle(user);
        setVans(data);
        setLoading(false);
      } catch (err) {
        console.log("error in hostVehicle", err);
        setError(err);
      }
    };

    hostVehicle();
  }, [user]);

  if (error) {
    return <h1>Error in host: {error.message}</h1>;
  }

  const contextData = { user, vans, setVans, loading, error, setError };

  return (
    <>
      <nav className="flex mb-[30px]">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline text-[#4d4d4d] font-medium px-5 py-1.5 hover:text-[#161616] hover:underline hover:font-semibold"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline text-[#4d4d4d] font-medium px-5 py-1.5 hover:text-[#161616] hover:underline hover:font-semibold"
        >
          Income
        </NavLink>

        <NavLink
          to="vehicles"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline text-[#4d4d4d] font-medium px-5 py-1.5 hover:text-[#161616] hover:underline hover:font-semibold"
        >
          Vehicles
        </NavLink>

        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="no-underline text-[#4d4d4d] font-medium px-5 py-1.5 hover:text-[#161616] hover:underline hover:font-semibold"
        >
          Reviews
        </NavLink>
      </nav>
      <ProtectedRoute>
        <Outlet context={contextData} />
      </ProtectedRoute>
    </>
  );
}
