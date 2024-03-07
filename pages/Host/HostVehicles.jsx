import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { getHostVehicle, deleteDocument } from "../../api";
import AddVehicle from "../../components/AddVehicle";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FcEmptyTrash } from "react-icons/fc";

export default function HostVehicles() {
  const { authUser, vans, setVans, error, setError } = useOutletContext();

  const [addVehicleVisible, setAddVehicleVisible] = useState(false);

  const loadVans = async () => {
    try {
      const data = await getHostVehicle(authUser);
      setVans(data);
      // console.log("dataid", data.id)
      // if (vans && !localStorage.getItem(data.id)) {
      //   vans.forEach((van) => {
      //     localStorage.setItem(van.id, JSON.stringify(van.id));
      //   });
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if(vans) {
      vans.forEach(van => {
        if(!localStorage.getItem(van.id)){
          localStorage.setItem(van.id, JSON.stringify(van.id));
        }
      })
    }
  }, [vans]);

  const deleteVehicle = async (id) => {
    const parsedData = JSON.parse(localStorage.getItem(id));
    if (!parsedData) {
      console.log("No data found in localStorage");
      return;
    }
    await deleteDocument(authUser, parsedData);
    localStorage.removeItem(id);
    setVans((prevVans) => prevVans.filter((van) => van.id !== id));
  };

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

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <section>
        <h1 className="p-4 font-semibold text-xl tect-center">
          Your hosted vehicles
        </h1>
        <div className="host-vans-list">
          {!vans.length ? (
            <div className="flex flex-col items-center my-5">
              <h2>You hosted vehicles list is empty</h2>
              <FcEmptyTrash size={50} />
            </div>
          ) : (
            <section>{hostVansEls}</section>
          )}
        </div>
      </section>
      <>
        {!addVehicleVisible && (
          <button
            onClick={() => setAddVehicleVisible(true)}
            className="p-2 bg-[#8e775b] text-white rounded-md ml-4 mt-5"
          >
            Add Vehicle
          </button>
        )}
        {addVehicleVisible && (
          <AddVehicle
            loadVans={loadVans}
            setAddVehicleVisible={setAddVehicleVisible}
          />
        )}
      </>
    </>
  );
}
