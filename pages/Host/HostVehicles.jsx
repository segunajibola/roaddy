import React, { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { getHostVehicle, deleteDocument } from "../../api";
import AddVehicle from "../../components/AddVehicle";

export default function HostVehicles() {
  const context = useOutletContext();

  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const loadVans = async () => {
    setLoading(true);
    try {
      const data = await getHostVehicle(context);
      setVans(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVans();
  }, []);

  const deleteVehicle = async (id) => {
    console.log(id);
    try {
      const storedData = localStorage.getItem(id);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        await deleteDocument(context, parsedData);
        console.log(parsedData); // Output: { name: "John", age: 30 }
      } else {
        console.log("No data found in localStorage");
      }

      // Remove something from localStorage
      localStorage.removeItem(id);
      loadVans();
      setVans((prevVans) => prevVans.filter((van) => van.id !== id));
    } catch (error) {}
  };

  //   conVehiclesEls = vans.map((van) => (
  //     <Link to={van.id} key={van.id} className="host-van-link-wrapper">
  //       <div className="host-van-single" key={van.id}>
  //         <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
  //         <div className="host-van-info">
  //           <h3>{van.name}</h3>
  //           <p>${van.price}/day</p>
  //           <div onClick={() => deleteVehicle(van.id)}>Delete data</div>
  //         </div>
  //       </div>
  //     </Link>
  //   ));

  const hostVansEls = vans.map((van) => (
    <div key={van.id} className="host-van-link-wrapper">
      <Link to={van.id} className="host-van-single">
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </Link>
      <div onClick={() => deleteVehicle(van.id)}>Delete data</div>
    </div>
  ));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const handlePost = () => {
    loadVans();
  };

  return (
    <>
      <AddVehicle onPostSuccess={handlePost} />
      <section>
        <h1 className="p-4 font-semibold text-2xl tect-center">Your hosted vehicles</h1>
        <div className="host-vans-list">
          {vans.length === 0 ? (
            <h2>You have not hosted any vehicle...</h2>
          ) : vans.length > 0 ? (
            <section>{hostVansEls}</section>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </section>
    </>
  );
}
