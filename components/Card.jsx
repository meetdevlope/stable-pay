import React from "react";
import ButtonComponent from "./ButtonComponent";
import Labels from "./Common/Labels";
import Wallet from "./Common/Wallet";

const Card = () => {
  return (
    <div className="flex-1">
      <div className="p-6 pt-4 rounded-2xl w-full lg:w-[90%] bg-white mx-auto flex flex-col gap-12">
        <span className="w-[20%] h-1 self-center bg-[#ebebeb] rounded-full"></span>
        <Wallet />
        {/* <div className="w-full flex items-center">
          <Labels label="50,000 INR" tag="You could save" />
          <span className="h-10 w-1 bg-dark_gray rounded-full"></span>
          <Labels label="By May 20nd" tag="Should arrive" />
        </div> */}
        {/* <div className="w-full flex lg:flex-row flex-col items-center gap-4">
          <ButtonComponent
            buttonText="Add to wallet"
            appearance="pri"
            buttonClass={"flex-1 py-4"}
          />
          <ButtonComponent
            buttonText="Deposit"
            appearance="pri-out"
            buttonClass={"flex-1 py-4"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Card;
