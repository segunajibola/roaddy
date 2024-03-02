import React, { useState } from "react";
import { createCollection } from "../api";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

const CollectionCreator = ({ onPostSuccess }) => {
  const context = useOutletContext();

  const [collection, setCollection] = useState({
    name: "",
    description: "",
    hostId: "",
    imageUrl: "",
    price: "",
    type: "",
  });

  const handleCreateCollection = async () => {
    try {
      createCollection(context, collection);
      // ccCreate the collection in Firestore
      // await firestore.collection(collectionName).add({
      //cc Add initial data if needed
      //cc Example: { name: 'Initial Data' }
      // });
      onPostSuccess()
      console.log('Collection created successfully');
    } catch (error) {
      console.error("Error creating collection:", error);
    }
  };

  return (
    <div>
      <h2>Create Collection</h2>
      <input
        type="text"
        name="name"
        value={collection.name}
        onChange={(e) =>
          setCollection((prev) => ({ ...prev, ["name"]: e.target.value }))
        }
        placeholder="Enter collection name"
      />
      <input
        type="text"
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
      <input
        type="text"
        name="hostId"
        value={collection.hostId}
        onChange={(e) =>
          setCollection((prev) => ({ ...prev, ["hostId"]: e.target.value }))
        }
        placeholder="Enter collection hostId"
      />
      <input
        type="text"
        name="imageUrl"
        value={collection.imageUrl}
        onChange={(e) =>
          setCollection((prev) => ({ ...prev, ["imageUrl"]: e.target.value }))
        }
        placeholder="Enter collection imageUrl"
      />
      <input
        type="text"
        name="price"
        value={collection.price}
        onChange={(e) =>
          setCollection((prev) => ({ ...prev, ["price"]: e.target.value }))
        }
        placeholder="Enter collection price"
      />
      <input
        type="text"
        name="type"
        value={collection.type}
        onChange={(e) =>
          setCollection((prev) => ({ ...prev, ["type"]: e.target.value }))
        }
        placeholder="Enter collection type"
      />
      <button onClick={handleCreateCollection}>Create Collection</button>
    </div>
  );
};

export default CollectionCreator;
