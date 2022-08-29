import React from "react";
import ComparisonCard from "./ComparisonCard";

const ComparisonCardSection = () => {
  return (
    <section className="bg-pri py-10">
      <div className="max-w-7xl m-auto flex">
        <div className="flex-1 text-left">
          <h1 className="text-white text-2xl font-dm_serif font-bold">
            If you send $500 <br /> Receiver should get worth $500 in local
            country
          </h1>
          <h2 className="text-gray font-poppins my-6 text-sm">
            That&apos;s not the case with other money transfer operators
          </h2>
        </div>
        <div className="flex-1">
          <ComparisonCard />
        </div>
      </div>
    </section>
  );
};

export default ComparisonCardSection;
