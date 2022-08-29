import Image from "next/image";
import React from "react";
import EmailComponent from "./EmailComponent";
import TypeComponent from "./TypeComponent";

const NoChargesSection = () => {
  return (
    <section className="flex flex-col text-pri gap-4 max-w-7xl mx-auto my-10 items-center text-center lg:text-left">
      <h2 className="text-3xl font-dm_serif font-bold"> StablePay</h2>
      <div className="max-w-lg flex gap-2 text-3xl font-dm_serif font-bold">
        <h5>$0</h5>
        <TypeComponent />
      </div>

      {/* forex - Transaction - Service - Convenience */}

      <h4 className="font-bold text-sm mt-10">Never any fees</h4>
      <h4 className="max-w-sm text-center mx-auto lg:mx-0 text-sm">
        We will never charge you. We’re on your team, so let’s win together.
      </h4>
      <div className="flex flex-col items-center mt-10">
        <h4 className="text-sm mb-2 text-center">
          Join the Future of Global Remittance
        </h4>
        <EmailComponent buttonAppearence="pri" />
      </div>
    </section>
  );
};

export default NoChargesSection;
