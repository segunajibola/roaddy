import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
    const testimonialsData = [
        {
            image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
            desc: "“Tailwind CSS is the only framework that I've seen scale on large teams. It\’s easy to customize, adapts to any design, and the build size is tiny.”",
            name: "Sarah Dayan",
            title: "Staff Engineer, Algolia",
        }
    ]
  return (
    {testimonialsData.map(data => (
    <TestimonialsCard data={data}/>))}
  );
};

export default Testimonials;
