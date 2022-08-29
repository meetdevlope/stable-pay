import React from "react";

const Labels = ({ tag = "", label = "", onChange }) => {
  return (
    <div className="flex-1 flex items-center flex-col gap-1">
      <p className="text-gray-500">{tag}</p>
      <h4 className="font-bold text-lg">{label}</h4>
    </div>
  );
};

export default Labels;
