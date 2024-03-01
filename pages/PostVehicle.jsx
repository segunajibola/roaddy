import React, { useState } from 'react';
import { auth, firestore } from '../api';

const CollectionCreator = () => {
  const [collectionName, setCollectionName] = useState('');

  const handleCreateCollection = async () => {
    try {
      // Create the collection in Firestore
      await firestore.collection(collectionName).add({
        // Add initial data if needed
        // Example: { name: 'Initial Data' }
      });
      console.log('Collection created successfully');
    } catch (error) {
      console.error('Error creating collection:', error);
    }
  };

  return (
    <div>
      <h2>Create Collection</h2>
      <input
        type="text"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
        placeholder="Enter collection name"
      />
      <button onClick={handleCreateCollection}>Create Collection</button>
    </div>
  );
};

export default CollectionCreator;
