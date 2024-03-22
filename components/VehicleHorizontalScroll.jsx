import React, { useState } from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";

const VehicleHorizontalScroll = () => {
  const [isDown, setIsDown] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { vans } = useFetchVehicles();

  const handleMouseUp = () => {
    setIsDown(false);
    document.querySelector(".scroll").classList.remove("active");
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    document.querySelector(".scroll").classList.remove("active");
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDown(true);
    document.querySelector(".scroll").classList.add("active");
    setScrollX(e.pageX - e.target.offsetLeft);
    setScrollLeft(e.target.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const element = e.pageX - e.target.offsetLeft;
    const scrolling = (element - scrollX) * 2;
    e.target.scrollLeft = scrollLeft - scrolling;
  };

  const shuffleArray = (array) => {
    // Create a copy of the original array
    const shuffledArray = [...array];
    // Shuffle the copied array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const shuffledDataArray = shuffleArray(vans);

  return (
    <div className="max-w-screen-xl w-full mx-auto px-2">
      <div
        className="relative flex flex-row flex-nowrap items-center w-full h-auto py-4 px-0 mt-5 cursor-default overflow-x-auto overscroll-x-none snap-x-mandatory snap-px-1.25 scroll active"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {shuffledDataArray.map((van) => (
          <div className="w-72 h-auto flex-shrink-0 mx-3 border-none outline-none rounded-b-xl text-gray-900 bg-white shadow-md">
            <div className="relative block w-full h-[250px] aspect-w-16 aspect-h-9">
              <img
                src={van.imageUrl}
                loading="lazy"
                className="w-full h-full object-cover rounded-t-xl"
                alt="Images"
              />
            </div>
            <div className="flex justify-between items-center m-1">
              <h3 className="font-semibold text-lg">{van.name}</h3>
              <p className="rounded-[10px] bg-[#ffead0] px-[6px] py-1.5">
                ${van.price}
                <span>/day</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleHorizontalScroll;
