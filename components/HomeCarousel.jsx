import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCarousel = ({ className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider
      {...settings}
      className={`bg-yellowc-500 w-[90%] mx-auto ${className}`}
    >
      <div className="">
        <img
          src="/assets/images/signUp.png"
          alt="creating an account"
          className="h-full w-[80%] mx-auto"
        />
        <div className="text-center text-2xl mb-6">Create an account</div>
      </div>
      <div className="bg-red-5d00">
        <img
          src="/assets/images/findACar.png"
          alt=""
          className="h-full w-[80%] mx-auto"
        />
        <div className="text-center text-2xl">Find a car</div>
      </div>
      <div className="bg-red-5d00">
        <img
          src="/assets/images/rent.jpg"
          alt=""
          className="h-full w-[80%] mx-auto mt-[18%]"
        />
        <div className="text-center text-2xl mt-[8%]">Rent</div>
      </div>
    </Slider>
  );
};

export default HomeCarousel;
