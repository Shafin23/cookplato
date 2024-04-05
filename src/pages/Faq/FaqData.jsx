import React from "react";

const FaqData = ({ title, description, color }) => {
  return (
    <div className={`mb-5 w-[370px]${color} pb-5`}>
      <h1 className="font-semibold text-lg mb-4">{title}</h1>
      <p className="text-[#666666] text-xs 2xl:text-base">{description}</p>
    </div>
  );
};

export default FaqData;
