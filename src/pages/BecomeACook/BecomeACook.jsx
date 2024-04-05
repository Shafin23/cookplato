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
      <div className="flex w-[80vw] py-16 justify-center space-x-8 mb-10 mx-auto">
        <img className="w-80 h-80" src={ladisFinger} alt="" />
        <img className="w-80 h-80" src={roll} alt="" />
        <img className="w-80 h-80" src={egg} alt="" />
        <img className="w-80 h-80" src={onion} alt="" />
      </div>
      <div className="w-[72vw] py-16 justify-center mb-10 mx-auto">
        <h1 className="text-5xl mb-7 font-bold">
          {t("becomeACook.becomeACookTitle")}
        </h1>
        <p className="text-lg leading-9 font-medium">
          {t("becomeACook.becomeACookDescription")}
        </p>
      </div>
      <div className="bg-[#fffaea] py-16">
        <h1 className="text-4xl font-bold w-[72vw] justify-center mb-10 mx-auto">
          Why become a CookPlato cook?
        </h1>
        <div className="flex gap-8 justify-center">
          <div className="w-80 text-center">
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
          <div className="w-80 text-center">
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
          <div className="w-80 text-center">
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
          <div className="w-80 text-center">
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
      <div className="flex space-x-40 py-16 mx-auto border items-center justify-center">
        <div className="flex space-x-6">
          <img
            className="h-[32vw] rounded-e-2xl"
            src="/public/AboutImg/how to become a cook/modified louis.jpg"
            alt=""
          />

          <img
            className="h-[35vw] rounded-s-2xl"
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
          />
          <AboutDescription
            wdth={"w-[450px]"}
            svg={profile}
            title={t("becomeACook.passionForCooking")}
            description={t("becomeACook.passionForCookingDescription")}
          />
          <AboutDescription
            wdth={"w-[450px]"}
            svg={doubleCheck}
            title={t("becomeACook.passionForCooking")}
            description={t("becomeACook.passionForCookingDescription")}
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeACook;
