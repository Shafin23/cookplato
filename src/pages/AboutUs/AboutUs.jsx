import React from "react";
import { useTranslation } from "react-i18next";
import AboutDescription from "./AboutDescription";
import svg from "/public/AboutImg/svgviewer-output (1).svg";
import svgOne from "/public/AboutImg/svgviewer-output.svg";
import svgTwo from "/public/AboutImg/Vector.svg";

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-10">
      <div className="bg-[#fffaea] py-8">
        <div className="flex flex-col lg:flex-row xl:w-4/5 mx-4 lg:space-x-11 lg:justify-center xl:space-x-44 xl:mx-auto">
          <div className="">
            <h1 className="font-bold text-2xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8">
              {t("about.aboutUs")}
            </h1>
            <div className="tracking-wide mb-5 lg:mb-0">
              <p className="text-base lg:text-lg mb-2 lg:mb-4 font-medium w-full lg:leading-9  xl:w-[600px] lg:w-[500px]">
                {t("about.aboutUsDescription")}
              </p>
              <p className="text-base lg:text-lg mb-2 lg:mb-4 font-medium w-full lg:leading-9  xl:w-[600px] lg:w-[500px]">
                {t("about.aboutUsDescriptionTwo")}
              </p>
            </div>
          </div>
          <div className="">
            <img
              className="lg:w-96 xl:w-[500px]"
              src="/AboutImg/pexels-klaus-nielsen-6287581-scaled.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex flex-col lg:flex-row xl:w-4/5 mx-4 lg:space-x-11 lg:justify-center xl:space-x-44 xl:mx-auto">
          <div className="mb-5">
            <img
              className="lg:w-96 xl:w-[500px]"
              src="/public/AboutImg/pexels-yente-van-eynde-2403391-scaled.webp"
              alt=""
            />
          </div>
          <div className="">
            <h1 className="font-bold text-5xl mb-8">{t("about.ourWish")}</h1>
            <div className="tracking-wide">
              <p className="text-base lg:text-lg mb-2 lg:mb-4 font-medium w-full lg:leading-9  xl:w-[600px] lg:w-[500px]">
                {t("about.ourWishDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex flex-col mx-4 lg:flex-row xl:w-4/5  lg:space-x-11 lg:justify-center xl:space-x-44 xl:mx-auto">
          <img
            className="lg:w-96 xl:w-[500px]"
            src="/AboutImg/1707x2000-768x900.webp"
            alt=""
          />
          <div className="">
            <h1 className="font-bold text-2xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8">{t("about.bucătari")}</h1>
            <div className="tracking-wide">
              <p className="text-base lg:text-lg mb-2 lg:mb-4 font-medium w-full lg:leading-9  xl:w-[600px] lg:w-[500px]">
                <AboutDescription
                  svg={svgTwo}
                  title={t("about.trustedAndVerifiedCooks")}
                  description={t("about.trustedAndVerifiedCooksDescription")}
                  wdth={"w-full xl:w-[600px] lg:w-[500px]"}
                  flexy={"flex-col lg:flex-row lg:space-x-8"}
                />
                <AboutDescription
                  svg={svgOne}
                  title={t("about.accessibleToAll")}
                  description={t("about.accessibleToAllDescription")}
                  wdth={"w-full xl:w-[600px] lg:w-[500px]"}
                  flexy={"flex-col lg:flex-row lg:space-x-8"}
                />
                <AboutDescription
                  svg={svg}
                  title={t("about.Fast&FriendlyResponses")}
                  description={t("about.Fast&FriendlyResponsesDescription")}
                  wdth={"w-full xl:w-[600px] lg:w-[400px]"}
                  flexy={"flex-col lg:flex-row lg:space-x-8"}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
