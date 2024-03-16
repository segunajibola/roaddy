import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();

  return (
    <section className="host-van-detail-info">
      <h4 className="font-bold text-lg">
        Name: <span>{currentVan.name}</span>
      </h4>
      <h4 className="font-bold text-lg">
        Category: <span>{currentVan.type}</span>
      </h4>
      <h4 className="font-bold text-lg">
        Description: <span className="font-medium">{currentVan.description}</span>
      </h4>
      <h4 className="font-bold text-lg">
        Visibility: <span className="font-medium">Public</span>
      </h4>
    </section>
  );
}
