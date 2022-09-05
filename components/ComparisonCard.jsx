import React from "react";

const ComparisonCard = ({ companyName, amount, charges }) => {
  const cardData = [
    {
      companyName: "Stable Pay",
      amount: "500",
      charges: "$0 Fee",
    },
    {
      companyName: "Westen Union",
      amount: "481",
      charges: "2.5-3.75% Fee",
    },
    {
      companyName: "Money Gram",
      amount: "480",
      charges: "3.17-4% Fee",
    },
    {
      companyName: "Wise",
      amount: "485",
      charges: "1.3-3% Fee",
    },
  ];
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      {cardData.map((data, idx) => (
        <div
          key={idx}
          className={`flex justify-between items-center p-4 text-white border rounded-xl w-full max-w-xs ${
            data.companyName === "StablePay"
              ? "bg-pri-dark border-pri-light scale-[1.2] shadow-2xl mx-4 md:mx-0"
              : "bg-pri border-0"
          }`}
        >
          <div>
            <h3 className="font-semibold text-xl mb-2">{data.companyName}</h3>
            <p className="text-xs">{data.charges}</p>
          </div>
          <h5
            className={`font-medium my-2 ${
              data.companyName === "StablePay"
                ? "bg-pri-light rounded-full px-4 py-2"
                : null
            }`}
          >
            $ {data.amount}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ComparisonCard;
