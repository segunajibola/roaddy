import React from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { getHostVehicle } from "../api";

export default function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const authUser = useOutletContext();
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    const hostVehicle = async () => {
      try {
        const data = await getHostVehicle(authUser);
        console.log("vans in hostlayout", data);
        setVans(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };

    hostVehicle();
  }, []);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  const contextData = { authUser, vans, setVans, loading, error, setError };

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
