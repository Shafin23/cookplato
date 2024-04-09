import React from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = ({ isClicked, setIsClicked }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{ right: isClicked ? "16vw" : "100vw" }}
      className=" transition-all absolute bg-white top-0 w-10/12 min-h-full h-auto  block xl:hidden z-50"
    >
      {/* top head -------- */}
      <div className=" bg-amber-500 flex justify-between items-center px-4 py-6">
        <IoMdArrowBack
          className=" text-3xl"
          onClick={() => setIsClicked(!isClicked)}
        />
        <h1 className=" text-xl font-semibold">Login/Register</h1>
      </div>

      {/* list -------------------- */}
      <ul className=" w-full px-4 my-4">
        <li className=" py-4 border-b font-semibold">
          <Link to="/">{t("nav.listOfDishes")}</Link>
        </li>
        <li className=" py-4 border-b font-semibold">
          <Link to="/becomeACook">{t("nav.becomeACook")}</Link>
        </li>
        {/* <li className=' py-4 border-b font-semibold'><Link to="">HOW IT WORKS</Link></li> */}
        <li className=" py-4 border-b font-semibold">
          <Link to="/about">{t("nav.aboutUs")}</Link>
        </li>
        <li className=" py-4 border-b font-semibold">
          <Link to="/contact-us">{t("nav.contactUs")}</Link>
        </li>
        <li className=" py-4 border-b font-semibold">
          <Link to="/faq">{t('nav.faq')}</Link>
        </li>
        <li className=" py-4 border-b font-semibold">
          <Link to="">DASHBOARD</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
