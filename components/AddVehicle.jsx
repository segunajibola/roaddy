import React, { useState } from "react";
import { createCollection } from "../api";
import { useOutletContext } from "react-router-dom";

const AddVehicle = ({ onPostSuccess }) => {
  const context = useOutletContext();

  const [collection, setCollection] = useState({
    name: "",
    description: "",
    hostId: "",
    imageUrl: "",
    price: "",
    type: "",
  });

  const handleCreateCollection = async (e) => {
    e.preventDefault();
    try {
      await createCollection(context, collection);
      onPostSuccess();
      console.log("Collection created successfully");
    } catch (error) {
      console.error("Error creating collection:", error);
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
            placeholder="Enter collection name"
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
            placeholder="Enter collection description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hostId" className="block">
            Host ID
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="text"
            id="hostId"
            name="hostId"
            value={collection.hostId}
            onChange={(e) =>
              setCollection((prev) => ({ ...prev, ["hostId"]: e.target.value }))
            }
            placeholder="Enter collection hostId"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block">
            Image Link
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
            placeholder="Enter collection imageUrl"
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
            placeholder="Enter collection price"
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
            placeholder="Enter collection type"
          />
        </div>
        <button className="col-span-full bg-[#8e775b] text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
