import ladisFinger from "/public/AboutImg/how to become a cook/pexels-cottonbro-studio-3338497-410x410-2.webp";
import roll from "/public/AboutImg/how to become a cook/pexels-cottonbro-studio-3304057-410x410-1.webp";
import egg from "/public/AboutImg/how to become a cook/pexels-klaus-nielsen-6287261-410x410-1.webp";
import onion from "/public/AboutImg/how to become a cook/pexels-dapur-melodi-1109197-410x410-1.webp";
import { useTranslation } from "react-i18next";
import AboutDescription from "../AboutUs/AboutDescription";
import fire from "/public/AboutImg/fire.svg";
import profile from "/public/AboutImg/profile (2).svg";
import doubleCheck from "/public/AboutImg/double check.svg";

const BecomeACook = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col md:flex-row py-10 space-y-5 md:space-y-0 items-center md:justify-center md:space-x-4 xl:space-x-8 mb-0 lg:mb-10 mx-auto">
        <img className="md:w-1/5" src={ladisFinger} alt="" />
        <img className="md:w-1/5" src={roll} alt="" />
        <img className="md:w-1/5" src={egg} alt="" />
        <img className="md:w-1/5" src={onion} alt="" />
      </div>
      <div className="lg:w-[80vw] w-11/12 py-16 justify-center mb-4 lg:mb-10 mx-auto">
        <h1 className="lg:text-5xl text-4xl mb-7 font-bold">
          {t("becomeACook.becomeACookTitle")}
        </h1>
        <p className="text-lg leading-9 font-medium">
          {t("becomeACook.becomeACookDescription")}
        </p>
      </div>
      <div className="bg-[#fffaea] py-16">
        <h1 className="text-4xl font-bold text-center w-[72vw] justify-center mb-10 mx-auto">
          Why become a CookPlato cook?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:w-5/6 xl:mx-auto justify-items-center gap-10 md:gap-0">
          <div className="w-3/4 md:w-4/5 text-center">
            <img
              className="w-24 h-24 mx-auto"
              src="/public/AboutImg/how to become a cook/money.webp"
              alt=""
            />
            <h1 className="font-bold text-2xl my-3">Win for your passion</h1>
            <p className="text-lg leading-8">
              The place where your passion for cooking becomes a source of
              income. Showcase your culinary creations, get recognition for your
              skills and earn money doing what you love.
            </p>
          </div>
          <div className="w-3/4 md:w-4/5 text-center">
            <img
              className="w-24 h-24 mx-auto"
              src="/public/AboutImg/how to become a cook/money.webp"
              alt=""
            />
            <h1 className="font-bold text-2xl my-3">Win for your passion</h1>
            <p className="text-lg leading-8">
              The place where your passion for cooking becomes a source of
              income. Showcase your culinary creations, get recognition for your
              skills and earn money doing what you love.
            </p>
          </div>
          <div className="w-3/4 md:w-4/5 text-center">
            <img
              className="w-24 h-24 mx-auto"
              src="/public/AboutImg/how to become a cook/money.webp"
              alt=""
            />
            <h1 className="font-bold text-2xl my-3">Win for your passion</h1>
            <p className="text-lg leading-8">
              The place where your passion for cooking becomes a source of
              income. Showcase your culinary creations, get recognition for your
              skills and earn money doing what you love.
            </p>
          </div>
          <div className="w-3/4 md:w-4/5 text-center">
            <img
              className="w-24 h-24 mx-auto"
              src="/public/AboutImg/how to become a cook/money.webp"
              alt=""
            />
            <h1 className="font-bold text-2xl my-3">Win for your passion</h1>
            <p className="text-lg leading-8">
              The place where your passion for cooking becomes a source of
              income. Showcase your culinary creations, get recognition for your
              skills and earn money doing what you love.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-10 xl:space-x-40 py-16 mx-auto border items-center justify-center">
        <div className="flex space-x-6 mb-12 lg:mb-0">
          <img
            className="h-[85vw] lg:h-[50vw] xl:h-[32vw] rounded-e-2xl"
            src="/public/AboutImg/how to become a cook/modified louis.jpg"
            alt=""
          />

          <img
            className="h-[85vw] lg:h-[50vw] xl:h-[35vw] rounded-s-2xl"
            src="/public/AboutImg/how to become a cook/mod cook.jpg"
            alt=""
          />
        </div>
        <div className="">
          <AboutDescription
            wdth={"w-[450px]"}
            svg={fire}
            title={t("becomeACook.passionForCooking")}
            description={t("becomeACook.passionForCookingDescription")}
            flexy={"flex-col lg:flex-row lg:space-x-8"}
          />
          <AboutDescription
            wdth={"w-[450px]"}
            svg={profile}
            title={t("becomeACook.passionForCooking")}
            description={t("becomeACook.passionForCookingDescription")}
            flexy={"flex-col lg:flex-row lg:space-x-8"}
          />
          <AboutDescription
            wdth={"w-[450px]"}
            svg={doubleCheck}
            title={t("becomeACook.passionForCooking")}
            description={t("becomeACook.passionForCookingDescription")}
            flexy={"flex-col lg:flex-row lg:space-x-8"}
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeACook;
