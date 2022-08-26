import React from "react";

const ComparisonCard = ({ companyName, amount, charges }) => {
  const cardData = [
    {
      companyName: "StablePay",
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
          className={`text-center flex flex-col justify-between py-2 text-white border rounded-xl w-52 h-28 ${
            data.companyName === "StablePay"
              ? "bg-pri-dark border-pri-light"
              : "bg-pri-light border-pri-dark"
          }`}
        >
          <h3 className="font-semibold text-lg">{data.companyName}</h3>
          <h5 className="font-medium my-2">$ {data.amount}</h5>
          <p className="text-xs">{data.charges}</p>
        </div>
      ))}
    </div>
  );
};

export default ComparisonCard;
