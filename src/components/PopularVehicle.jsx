import React, { useState, useEffect } from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";
import { VehicleCard } from "./";
import Skeleton from "react-loading-skeleton";

const PopularVehicle = () => {
  const [isDown, setIsDown] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [shuffledDataArray, setShuffledDataArray] = useState([]);
  const { vans, loading } = useFetchVehicles();

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

  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    setShuffledDataArray(shuffleArray(vans).slice(0, 2));
  }, [vans]);

  if (loading)
    return (
      <div className="flex gap-x-3 overflow-hidden">
        <Skeleton height={320} width={300} />
        <Skeleton height={320} width={300} />
      </div>
    );

  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <div
        className="relative flex flex-row flex-nowrap items-center w-full h-auto pb-4 px-0 cursor-default overflow-x-auto overscroll-x-none snap-x-mandatory snap-px-1.25 scroll active"
        // onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseLeave}
        // onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
      >
        {shuffledDataArray.map((vehicle) => (
          <VehicleCard
            vehicle={vehicle}
            key={vehicle.id}
            width="w-[60vw]"
            margin="mx-3"
          />
        ))}
      </div>
    </div>
  );
};

export default PopularVehicle;
