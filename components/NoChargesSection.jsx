import Image from "next/image";
import React from "react";
import EmailComponent from "./EmailComponent";
import TypeComponent from "./TypeComponent";

const NoChargesSection = () => {
  return (
    <section className="py-10">
      <div className="container flex flex-row-reverse justify-center flex-wrap gap-20 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col justify-center tab:items-start items-center text-center tab:text-left text-[#e1e1ff]">
          <div className="max-w-lg tab:flex flex-wrap tab:items-start text-center gap-2 text-2xl tab:text-4xl font-dm_serif font-bold text-white">
            <h5 className="text-center">Stable Pay fees $0</h5>
            <TypeComponent />
          </div>
          <p className="text-xl my-6 text-[#e8e8ff]">
            In short NO charges for sending money around the world, instantly!
          </p>
          <h4 className="text-3xl font-bold">Never any fees</h4>
          <h4 className="max-w-sm lg:mx-0 text-base my-3">
            We will never charge you. We’re on your team, so let’s win together.
          </h4>
          <div className="flex flex-col">
            <h4 className="text-lg mb-8 font-bold text-white">
              Join the Future of Global Remittance
            </h4>
            <EmailComponent buttonAppearence="pri" />
          </div>
          <div className="flex gap-8"></div>
        </div>
        <div className="relative basis-[500px] aspect-h-image overflow-hidden">
          <Image
            priority
            src="/images/stable-pay-mock.png"
            layout={"fill"}
            objectFit={"contain"}
            objectPosition={"center"}
            alt="subject-image"
          />
        </div>
      </div>
    </section>
  );
};

export default NoChargesSection;
