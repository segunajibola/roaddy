import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <section className="p-6 text-[#161616]">
      <div className="flex items-center mb-8">
        <h2 className="font-bold text-3xl mr-5">Your reviews</h2>
        <p className="text-[#4d4d4d]">
          Last <span className="underline font-bold">30 days</span>
        </p>
      </div>
      <img className="mb-9" src="/reviews-graph.png" alt="Review graph" />
      <h3 className="text-xl font-medium">Reviews ({reviewsData.length})</h3>
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className="my-6">
            <div className="flex my-3">
              {[...Array(review.rating)].map((_, i) => (
                <BsStarFill className="text-[#ff8c38] mr-1" key={i} />
              ))}
            </div>
            <div className="flex">
              <p className="text-[#161616] mr-2.5 font-semibold">
                {review.name}
              </p>
              <p className="text-[#8c8c8c]">{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr className="bg-[#c7c7c7] h-[1px] border-[0]" />
        </div>
      ))}
    </section>
  );
}
