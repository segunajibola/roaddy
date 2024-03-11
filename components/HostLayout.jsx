import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { getHostVehicle } from "../api";
import { UserContext } from "../context/AuthContext";

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
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>

        <NavLink
          to="vehicles"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vehicles
        </NavLink>

        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet context={contextData} />
    </>
  );
}
