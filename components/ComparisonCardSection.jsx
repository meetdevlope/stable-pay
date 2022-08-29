import React from "react";
import ComparisonCard from "./ComparisonCard";

const ComparisonCardSection = () => {
  return (
    <section className="bg-pri py-20">
      <div className="max-w-5xl m-auto flex flex-col items-center">
        <div className="mb-12">
          <h1 className="text-white text-3xl font-dm_serif text-center font-bold">
            If you send $500 <br /> Receiver should get worth $500 in local
            country
          </h1>
          <h2 className="text-gray font-poppins my-6 text-sm text-center">
            That&apos;s not the case with other money transfer operators
          </h2>
        </div>
        <div>
          <ComparisonCard />
        </div>
      </div>
    </section>
  );
};

export default ComparisonCardSection;
