import React from "react";

const FaqData = ({ title, description }) => {
  return (
    <div className="mb-5 w-[370px]">
      <h1 className="font-semibold text-lg mb-4">{title}</h1>
      <p className="text-[#666666] text-xs 2xl:text-base">{description}</p>
    </div>
  );
};

export default FaqData;
