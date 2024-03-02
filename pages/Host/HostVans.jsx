import React, { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { getHostVehicle } from "../../api";
import PostVehicle from "../../components/PostVehicle";

export default function HostVans() {
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

  const hostVansEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
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
      <div>Host van</div>
      <PostVehicle onPostSuccess={handlePost} />
      <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
          {vans.length > 0 ? (
            <section>{hostVansEls}</section>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </section>
    </>
  );
}
