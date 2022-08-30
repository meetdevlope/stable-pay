import React from "react";
import Card from "./Card";
import Intro from "./Common/Intro";

const Hero = () => {
  return (
    <main className="w-full h-auto lg:h-[90vh] px-3 py-10 lg:px-[8rem] bg-pri flex items-start">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row m-auto h-auto lg:items-center gap-10">
        <Intro title={"A better way to send money globally"}>
          Stop paying up to 7% fees everytime you send money, plus they are time
          consuming.
        </Intro>
        <Card />
      </div>
    </main>
  );
};

export default Hero;
