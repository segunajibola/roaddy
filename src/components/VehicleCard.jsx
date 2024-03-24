import React from "react";
import { MdLocalGasStation } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiGearStick } from "react-icons/gi";

const VehicleCard = ({ vehicle, width, margin }) => {
  const { imageUrl, fuel, transmission, capacity, price, id, name } = vehicle;
  return (
    <div
      className={`${width} ${margin} h-auto flex-shrink-0 border-none outline-none text-gray-900 bg-white shadow-md rounded-xl overflow-hidden`}
      key={id}
    >
      <div className="relative block w-full h-[250px] overflow-hidden">
        <img
          src={imageUrl}
          className="w-full h-full object-cover "
          alt="Images"
        />
      </div>
      <div className="m-1">
        <div className="flex justify-between my-2">
          <div className="flex justify-center items-center gap-x-[1px]">
            <MdLocalGasStation className="" size={20} />
            <span>{fuel}</span>
          </div>
          <div className="flex justify-center items-center gap-x-[1px]">
            <GiGearStick className="" size={20} />
            <span>{transmission}</span>
          </div>
          <div className="flex justify-center items-center gap-x-[1px]">
            <IoIosPeople className="" size={20} />
            <span>{capacity} People</span>
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <h3 className="font-semibold text-md">{name}</h3>
          <p className="rounded-[10px] font-semibold text-lg px-[6px] py-1.5">
            ${price}
            <span>/day</span>
          </p>
          <button className="bg-[#ff8c38] py-1 px-3 rounded-lg font-medium tracking-wide text-lg">
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
