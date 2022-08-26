import React from "react";
import Card from "./Card";
import Intro from "./common/Intro";

const Hero = () => {
  return (
    <main className="w-full h-auto lg:h-[90vh] px-3 py-10 lg:px-[8rem] bg-pri flex items-start">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row m-auto h-auto lg:items-center gap-10">
        <Intro title={"The easiest way to transfer your money "}>
          Join over 10 million people who are already saving - our transfers are
          up to 7x cheaper than banks and Paypal.
        </Intro>
        <Card />
      </div>
    </main>
  );
};

export default Hero;
