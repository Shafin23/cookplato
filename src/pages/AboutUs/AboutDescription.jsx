import React from "react";
const AboutDescription = ({svg, title, description, wdth, flexy}) => {

  return (
    <div className={`flex ${flexy} mb-6`}>
      <div>
        <div className="w-16 h-16 border-2 border-black mx-auto mb-6 rounded-full flex items-center justify-center">
          <img className="w-8 h-8" src={svg} alt="" />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-amber-400 text-3xl pb-3">{title}</h1>
        <p className={`text-xl leading-7 ${wdth}`}>{description}</p>
      </div>
    </div>
  );
};

export default AboutDescription;
