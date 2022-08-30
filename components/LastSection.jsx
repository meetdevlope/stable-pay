import React from "react";
import EmailComponent from "./EmailComponent";

const LastSection = () => {
  return (
    <section className="py-4 lg:py-10 flex flex-col items-center">
      <h1 className="text-center my-10 text-white text-3xl font-dm_serif font-bold">
        Stop paying up to 7% fees every time you send money, plus they are time
        consuming
      </h1>
      <EmailComponent buttonAppearence="pri" />
    </section>
  );
};

export default LastSection;
