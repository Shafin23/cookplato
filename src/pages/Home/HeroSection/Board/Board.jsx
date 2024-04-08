import React from "react";
import { useTranslation } from "react-i18next";

const Board = () => {

  const {t} = useTranslation()

  return (
    <div
      className=" mt-5 lg:mt-0 w-full lg:w-[28vw] h-auto md:h-[35vw] bg-[#fac250] 
     flex flex-col justify-center items-center p-16"
    >
      <h1 className="mb-2 lg:mb-6 xl:mb-10 text-lg md:text-xl xl:text-3xl font-bold text-center text-black">
        {t('heroSection')}
      </h1>

      <article className=" text-center text-black text-xs md:text-sm lg:text-base xl:text-lg
       w-[80vw] md:w-full mb-4">
        {t('heroSectionDes')}
      </article>

      <button className=" border-2 border-black px-6 py-2 bg-transparent font-bold transition-all duration-500 hover:bg-black hover:text-[#fac250]">
        Join us
      </button>
    </div>
  );
};

export default Board;
