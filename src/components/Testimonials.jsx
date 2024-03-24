import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <div className="relative flex flex-row flex-nowrap items-center w-full h-auto pb-4 px-0 cursor-default overflow-x-auto overscroll-x-none snap-x-mandatory snap-px-1.25 scroll active">
        {/* {shuffledDataArray.map((vehicle) => (
              <VehicleCard
                vehicle={vehicle}
                key={vehicle.id}
                width="w-[60vw]"
                margin="mx-3"
              />
            ))} */}
        <div className="w-[60vw] mx-3 flex flex-shrink-0">
          <div className="w-[45%] mr-3">
            <img
              src="https://images.unsplash.com/photo-1611432579699-484f7990b127"
              alt=""
              className="h-28 w-full rounded-2xl"
            />
            <span>Jane Doe</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            voluptatum aut ea aliquam itaque odio quos ipsam maiores delectus
            corporis sequi temporibus veritatis consequatur, totam odit
            architecto harum nam veniam!
          </p>
        </div>
        <div className="mb-8">
          <div className="flex rounded-lg bg-gray-50 p-6 shadow-sm w-[70vw] mx-3 flex-shrink-0">
            <div className="flex flex-col w-[40%] items-center gap-4">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="size-14 rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Paul Starr
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              sit rerum incidunt, a consequuntur recusandae ab saepe illo est
              quia obcaecati neque quibusdam eius accusamus error officiis atque
              voluptates magnam!
            </p>
          </div>
        </div>
        <div className="w-[100vw] mx-3">
          <img
            src="https://images.unsplash.com/photo-1611432579699-484f7990b127"
            alt=""
            className="h-48 w-[100vw] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
