import React from "react";
import ComparisonCard from "./ComparisonCard";

const ComparisonCardSection = () => {
  return (
    <section className="bg-pri flex flex-col py-10 justify-center items-center">
      <h1 className="text-center text-white text-2xl font-dm_serif font-bold">
        If you send $500 <br /> Receiver should get worth $500 in local country
      </h1>
      <h2 className="text-gray font-poppins my-6 text-center text-sm">
        That&apos;s not the case with other money transfer operators
      </h2>
      <ComparisonCard />
    </section>
  );
};

export default ComparisonCardSection;
