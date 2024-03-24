import React from 'react'

const TestimonialsCard = ({data}) => {
    const {image, desc, name, title} = data
  return (
    <div className="flex flex-col rounded-lg bg-white px-4 py-6 shadow-xl w-[70vw] gap-3 mx-1 flex-shrink-0">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={image}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-3 text-center space-y-2">
        <p className="text-lg">
         {desc}
        </p>
        <figcaption className="">
          <div className="">{name}</div>
          <div className="">{title}</div>
        </figcaption>
      </div>
    </div>
  )
}

export default TestimonialsCard