import React, { useState, useEffect } from "react";
import useFetchVehicles from "../hooks/useFetchVehicles";
import { MdLocalGasStation } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiGearStick } from "react-icons/gi";

const VehicleHorizontalScroll = () => {
  const [isDown, setIsDown] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [shuffledDataArray, setShuffledDataArray] = useState([]);
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

  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <div
        className="relative flex flex-row flex-nowrap items-center w-full h-auto pb-4 px-0 cursor-default overflow-x-auto overscroll-x-none snap-x-mandatory snap-px-1.25 scroll active"
        // onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseLeave}
        // onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
      >
        {shuffledDataArray.map((van) => (
          <div
            className="w-[60vw] h-auto flex-shrink-0 mx-3 border-none outline-none text-gray-900 bg-white shadow-md rounded-xl overflow-hidden"
            key={van.id}
          >
            <div className="relative block w-full h-[250px] overflow-hidden">
              <img
                src={van.imageUrl}
                loading="lazy"
                className="w-full h-full object-cover "
                alt="Images"
              />
            </div>
            <div className="m-1">
              <div className="flex justify-between my-2">
                <div className="flex justify-center items-center gap-x-[1px]">
                  <MdLocalGasStation className="" size={20} />
                  <span>{van.fuel}</span>
                </div>
                <div className="flex justify-center items-center gap-x-[1px]">
                  <GiGearStick className="" size={20} />
                  <span>{van.transmission}</span>
                </div>
                <div className="flex justify-center items-center gap-x-[1px]">
                  <IoIosPeople className="" size={20} />
                  <span>{van.capacity} People</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <h3 className="font-semibold text-md">{van.name}</h3>
                <p className="rounded-[10px] font-semibold text-lg px-[6px] py-1.5">
                  ${van.price}
                  <span>/day</span>
                </p>
                <button className="bg-[#ff8c38] py-1 px-3 rounded-lg font-medium tracking-wide text-lg">
                  Rent
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleHorizontalScroll;
