import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { getHostVehicle, deleteDocument } from "../../api";
import AddVehicle from "../../components/AddVehicle";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FcEmptyTrash } from "react-icons/fc";

export default function HostVehicles() {
  const context = useOutletContext();

  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [addVehicleVisible, setAddVehicleVisible] = useState(false);

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
        console.log(parsedData); 
      } else {
        console.log("No data found in localStorage");
      }

      localStorage.removeItem(id);
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
    <div key={van.id} className="flex justify-between bg-white">
      <Link to={van.id} className="flex items-center p-3">
        <img
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
          className="h-32 rounded-lg mr-4"
        />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
          <p>{van.description}</p>
        </div>
      </Link>
      <div
        onClick={() => deleteVehicle(van.id)}
        className="flex items-end cursor-pointer p-2"
      >
        <MdOutlineDeleteForever size={30} color="red" />
      </div>
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
      {!loading && !error && (
        <>
          {!addVehicleVisible && (
            <button
              onClick={() => setAddVehicleVisible(true)}
              className="p-2 bg-[#8e775b] text-white rounded-md ml-4"
            >
              Add Vehicle
            </button>
          )}
          {addVehicleVisible && <AddVehicle onPostSuccess={handlePost} setAddVehicleVisible={setAddVehicleVisible} />}
        </>
      )}
      <section>
        <h1 className="p-4 font-semibold text-xl tect-center">
          Your hosted vehicles
        </h1>
        <div className="host-vans-list">
          {vans.length === 0 ? (
            <div className="flex flex-col items-center my-5">
              <h2>You hosted vehicles list is empty</h2>
              <FcEmptyTrash size={50} />
            </div>
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
