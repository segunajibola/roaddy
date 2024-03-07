import React, { useState } from "react";
import { createCollection } from "../api";
import { useOutletContext } from "react-router-dom";

const AddVehicle = ({ loadVans, setAddVehicleVisible }) => {
  const { authUser } = useOutletContext();
  const [collection, setCollection] = useState({
    name: "",
    description: "",
    vehicleId: "",
    imageUrl: "",
    price: "",
    type: "",
  });

  const handleCreateCollection = async (e) => {
    e.preventDefault();

    const isCollectionEmpty = Object.values(collection).every(
      (value) => value === ""
    );

    if (isCollectionEmpty) {
      console.error("Please fill out at least one field in the collection.");
      return;
    }

    try {
      await createCollection(authUser, collection);
      loadVans();
      setCollection({
        name: "",
        description: "",
        vehicleId: "",
        imageUrl: "",
        price: "",
        type: "",
      });
      console.log("Collection created successfully");
    } catch (error) {
      console.error("Error creating collection:", error);
    }
  };

  const getRandomPixabayImage = async () => {
    const PIXABAY_API_URL = `https://pixabay.com/api/?key=${
      import.meta.env.VITE_PIXABAY_API_KEY
    }&q=vehicle&image_type=photo`;

    try {
      const response = await fetch(PIXABAY_API_URL);
      const data = await response.json();
      const num = Math.floor(Math.random() * (data.hits.length + 1));

      if (data.hits && data.hits.length > 0) {
        console.log(data)
        setCollection((prev) => ({
          ...prev,
          imageUrl: `${data.hits[num].largeImageURL}`,
        }));
      } else {
        throw new Error("Image not found");
      }
    } catch (error) {
      console.error("Error fetching random Pixabay image:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add new vehicle</h2>

      <form
        onSubmit={handleCreateCollection}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="text"
            id="name"
            name="name"
            value={collection.name}
            onChange={(e) =>
              setCollection((prev) => ({ ...prev, ["name"]: e.target.value }))
            }
            placeholder="Enter car name e.g Tesla"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block">
            Description
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="text"
            id="description"
            name="description"
            value={collection.description}
            onChange={(e) =>
              setCollection((prev) => ({
                ...prev,
                ["description"]: e.target.value,
              }))
            }
            placeholder="Describe your car"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleId" className="block">
            Vehicle ID
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="text"
            id="vehicleId"
            name="vehicleId"
            value={collection.vehicleId}
            onChange={(e) =>
              setCollection((prev) => ({
                ...prev,
                ["vehicleId"]: e.target.value,
              }))
            }
            placeholder="Enter vehicle id"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block">
            Image Link
            <span
              onClick={() => getRandomPixabayImage()}
              className="cursor-pointer ml-2 p-.5 rounded-lg bg-gray-300"
            >
              generate link
            </span>
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={collection.imageUrl}
            onChange={(e) =>
              setCollection((prev) => ({
                ...prev,
                ["imageUrl"]: e.target.value,
              }))
            }
            placeholder="Enter vehicle image link"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block">
            Price
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="text"
            id="price"
            name="price"
            value={collection.price}
            onChange={(e) =>
              setCollection((prev) => ({ ...prev, ["price"]: e.target.value }))
            }
            placeholder="Enter vehicle price($)"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block">
            Type
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="text"
            id="type"
            name="type"
            value={collection.type}
            onChange={(e) =>
              setCollection((prev) => ({ ...prev, ["type"]: e.target.value }))
            }
            placeholder="Enter vehicle type"
          />
        </div>
        <button className="col-span-full bg-[#645d53] text-white px-4 py-2 rounded-md hover:bg-[#7d6649] md:col-start-2 md:col-span-1">
          Add
        </button>
        <div
          className="text-center col-span-full bg-[#8e775b] text-white px-4 py-2 rounded-md hover:bg-[#7d6649] md:col-start-2 md:col-span-1"
          onClick={() => setAddVehicleVisible(false)}
        >
          Hide form
        </div>
      </form>
    </div>
  );
};

export default AddVehicle;
