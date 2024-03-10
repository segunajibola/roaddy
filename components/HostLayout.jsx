import React, { useContext } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { getHostVehicle } from "../api";
import { UserContext } from "../context/AuthContext";

export default function HostLayout() {
  const { user } = useContext(UserContext);

  //   console.js:213 Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
  // 1. You might have mismatching versions of React and the renderer (such as React DOM)
  // 2. You might be breaking the Rules of Hooks
  // 3. You might have more than one copy of React in the same app
  // See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
  //     at Object.throwInvalidHookError (chunk-X6ADV7NM.js?v=97c6a639:12124:17)
  //     at useContext (chunk-YZZKIYU7.js?v=97c6a639:1062:29)
  //     at HostLayout.jsx:6:18
  // overrideMethod @ console.js:213
  // warnFailedUpdate @ hmr.ts:247
  // fetchUpdate @ hmr.ts:300
  // await in fetchUpdate (async)
  // queueUpdate @ hmr.ts:265
  // (anonymous) @ client.ts:199
  // handleMessage @ client.ts:197
  // (anonymous) @ client.ts:91
  // Show 7 more frames
  // Show less

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  // const authUser = useOutletContext();

  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
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
  }, []);

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
