import React from "react";
import {
  useParams,
  useOutletContext,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import { getVan } from "../../api";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const context = useOutletContext();

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id, context);
        setCurrentVan(data);
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
    return <h1>There was an error: {error.message}</h1>;
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {currentVan && (
        <div className="bg-white p-6 mx-[26px] my-[30px]">
          <div className="flex items-center">
            <img src={currentVan.imageUrl} className="h-[160px] rounded-[5px] mr-5"/>
            <div>
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3 className="mt-6 mb-1 text-[26px] font-bold">{currentVan.name}</h3>
              <h4 className="text-lg">${currentVan.price}/day</h4>
            </div>
          </div>

          <nav className="host-van-detail-nav flex m-[25px]">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
              className="no-underline text-[#4d4d4d] font-medium px-[15px] py-[5px] -ml-[15px] hover:text-[#161616] hover:underline hover:font-bold"
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
              className="no-underline text-[#4d4d4d] font-medium px-[20px] py-[5px] hover:text-[#161616] hover:underline hover:font-bold"
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyles : null)}
              className="no-underline text-[#4d4d4d] font-medium px-[20px] py-[5px] hover:text-[#161616] hover:underline hover:font-bold"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentVan }} />
        </div>
      )}
    </section>
  );
}
