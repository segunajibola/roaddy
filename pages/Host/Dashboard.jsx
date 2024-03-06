import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

export default function Dashboard() {
  const { authUser, vans, error, setError } = useOutletContext();
  console.log("dashboard", authUser, vans, error, setError);

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>
            Welcome{" "}
            {authUser.displayName
              ? authUser.displayName.split(" ")[0]
              : authUser.email}
          </h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>

        <BsStarFill className="star" />

        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans {vans.length}</h2>
          <Link to="vehicles">View all</Link>
        </div>

        {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
      </section>
    </>
  );
}
