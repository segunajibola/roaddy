import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import { testimonialsData } from "../../utils/data"
const Testimonials = () => {
    
  return (
    <div className="relative flex flex-row flex-nowrap items-center w-full h-auto pb-4 px-0 cursor-default overflow-x-auto overscroll-x-none snap-x-mandatory snap-px-1.25 scroll active">
      {testimonialsData.map((data) => (
        <TestimonialsCard data={data} />
      ))}
    </div>
  );
};

export default Testimonials;
