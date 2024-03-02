import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVan } from "../../api";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was ane error: {error.message}</h1>;
  }

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      {van && (
        <div className="van-detail">
          <img src={van.imageUrl} />

          <div>
            <h2>{van.name}</h2>
            <div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <p className="van-price">
                <span>${van.price}</span>/day
              </p>
            </div>
          </div>

          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      )}
    </div>
  );
}
