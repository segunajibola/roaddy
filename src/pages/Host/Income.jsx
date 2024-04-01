import React from "react";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];
  return (
    <section className="p-[26px] text-[#161616]">
      <h1>Income</h1>
      <p className="text-[#4d4d4d]">
        Last <span className="underline font-bold">30 days</span>
      </p>
      <h2 className="text-[38px] text-[#161616] font-black">$2,260</h2>
      <img
        className="w-full max-w-[500px]"
        src="/income-graph.png"
        alt="Income graph"
      />
      <div>
        <h3 className="font-bold text-[24px] mt-[60px]">
          Your transactions (3)
        </h3>
        <p className="text-[#4d4d4d]">
          Last <span className="underline font-bold">30 days</span>
        </p>
      </div>
      <div className="">
        {transactionsData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white mb-[31px] px-7 py-9 rounded-md"
          >
            <h3 className="text-4xl font-semibold">${item.amount}</h3>
            <p className="font-medium text-xl text-[#4d4dd4d]">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
