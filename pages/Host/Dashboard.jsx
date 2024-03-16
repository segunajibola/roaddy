import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

export default function Dashboard() {
  const { user, vans, error, setError } = useOutletContext();
  console.log("dashboard", user, vans, error, setError);

  return (
    <>
      <section className="bg-[#ffead0] px-[26px] py-[37px] flex justify-between items-center">
        <div className="info">
          <h1 className="text-[36px] text-[#161616]">
            Welcome{" "}
            {user.displayName
              ? user.displayName.split(" ")[0]
              : user.email}
          </h1>
          <p className="text-[#4d4d4d]">
            Income last <span className="underline font-bold">30 days</span>
          </p>
          <h2 className="text-[38px] text-[#161616]font-black">$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="bg-[#ffddb2] px-[26px] py-[25px] flex items-center">
        <h2>Review score</h2>

        <BsStarFill className="text-[#ff8c38] ml-[15px] text-[25px]" />

        <p className="ml-1.5 text-[20px] text-[#4d4d4d] mr-auto">
          <span className="font-bold text-[#161616]">5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="px-[26px] py-[38px]">
        <div className="flex justify-between items-center">
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
