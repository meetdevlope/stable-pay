import Image from "next/image";
import React from "react";
import EmailComponent from "./EmailComponent";

const NoChargesSection = () => {
  return (
    <section className="flex flex-col gap-4 max-w-7xl mx-auto my-10 items-center text-center lg:text-left lg:flex-row">
      <div className="flex-1">
        <h2 className=" text-pri max-w-lg text-2xl font-dm_serif font-bold">
          StablePay $0 forex - Transaction - Service - Convenience — In short NO
          Charges for sending money around the world, instantly!!
        </h2>
        <h4 className="font-bold text-sm mt-10">Never any fees</h4>
        <h4 className="max-w-sm mx-auto lg:mx-0 text-sm">
          We will never charge you. We’re on your team, so let’s win together.
        </h4>
        <div className="flex flex-col items-center lg:items-start mt-10">
          <h4 className="text-sm mb-2">Join the Future of Global Remittance</h4>
          <EmailComponent buttonAppearence="pri" />
        </div>
      </div>
      <div className="flex-1 h-full w-full">
        <div className="relative h-96">
          <Image
            src={
              "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            }
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default NoChargesSection;
