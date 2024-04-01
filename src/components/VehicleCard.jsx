import React, { useState } from "react";
import { MdLocalGasStation } from "react-icons/md";
import { GiGearStick } from "react-icons/gi";
import { IoMdHeart, IoIosHeartEmpty, IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { handleLinkClick } from "../utils/funcs";
import { FaCarAlt } from "react-icons/fa";

const VehicleCard = ({ vehicle, width, margin }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { imageUrl, fuel, transmission, capacity, price, id, name, type } =
    vehicle;

  const handleFavourite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavourite(!isFavourite);
  };
  return (
    <div
      className={`${width} ${margin} h-auto flex-shrink-0 border-none outline-none text-gray-900 bg-white shadow-md rounded-xl overflow-hidden`}
      key={id}
    >
      <div>
        <div className="relative block w-full h-[250px] overflow-hidden">
          <img
            src={imageUrl}
            className="w-full h-full object-cover "
            alt={name}
          />
          <div
            className="absolute top-0 right-0 p-2"
            onClick={(e) => handleFavourite(e)}
          >
            {isFavourite ? (
              <IoMdHeart className="text-[#ff8c38]" size={35} />
            ) : (
              <IoIosHeartEmpty size={35} />
            )}
          </div>
        </div>
        <div className="m-1">
          <div className="flex justify-between my-2">
            <div className="flex justify-center items-center gap-x-[1px]">
              <MdLocalGasStation className="" size={20} />
              <span>{fuel}L</span>
            </div>
            <div className="flex justify-center items-center gap-x-[1px]">
              <GiGearStick className="" size={20} />
              <span>{transmission}</span>
            </div>
            <div className="flex justify-center items-center gap-x-[1px]">
              <FaCarAlt className="" size={20} />
              <span>{type}</span>
            </div>
            <div className="flex justify-center items-center gap-x-[1px]">
              <IoIosPeople className="" size={20} />
              <span>{capacity} People</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <h3 className="font-semibold text-md">{name}</h3>
            <p className="rounded-[10px] font-semibold text-lg px-[4px] py-1.5">
              ${price}
              <span>/day</span>
            </p>
            <Link
              to={`/vehicles/${id}`}
              onClick={handleLinkClick}
              className="bg-[#ff8c38] py-1 px-2.5 rounded-lg font-medium tracking-wide text-lg"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
