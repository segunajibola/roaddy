import React from 'react';

const TestimonialsCard = ({ data }) => {
  const { image, desc, name, title } = data;

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-white py-6 px-4 shadow-md shadow-[#ff8c38] border-t-2 w-[65vw] gap-3 mx-2 flex-shrink-0 h-[350px] overflow-hidden">
      <img
        className="w-28 h-28 rounded-full mx-auto object-cover object-top pt-2"
        src={image}
        alt=""
      />
      <div className="py-3 text-center space-y-2">
        <p className="text-lg">{desc}</p>
        <figcaption className="">
          <div className="">{name}</div>
          <div className="">{title}</div>
        </figcaption>
      </div>
    </div>
  );
};

export default TestimonialsCard;
