import { useContext, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { authContext } from "../../../../components/AuthProvider/AuthProvider";
import { useTranslation } from "react-i18next";

const LowerNav = () => {
  const { language } = useContext(authContext); // recieving state and function from authprovider through context api
  const [showList, setShowList] = useState(true); // when user hover on categories btn, then state become false and list will be seen

  const { t } = useTranslation(); // For language change

  return (
    <div className="w-full bg-[#fffaea]">
      <div className="mx-auto w-full lg:w-[96vw] py-5 flex justify-between items-center">
        {/* Category button  ==============================*/}
        <button
          onClick={() => setShowList(!showList)}
          className=" bg-[#fac250] flex justify-between items-center px-8 py-3 rounded relative"
        >
          <VscThreeBars />
          <span className="mx-3 font-semibold">{t("nav.categories")}</span>
          <IoIosArrowDown />

          {/* ul --- when user hover the button then user will get to see the list */}
          <ul
            className={
              showList
                ? " opacity-0 transition-all duration-500 z-50 top-14 right-[20vw] absolute px-7 py-6 border-2 bg-slate-50 w-72 rounded"
                : " duration-500 opacity-100 transition-all z-50 top-14 right-[-6vw] absolute px-7 py-6 border-2 bg-slate-50 w-72 rounded"
            }
          >
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/Appetizers">Appetizers</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/Other">Other</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/Pasta">Pasta</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/Dsert">Dsert</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/Meat Preparations">Meat Preparations</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/Fish and Seafood">Fish and Seafood</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/Supe">Supe</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/Vegan">Vegan</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/Dough Delights">Dough Delights</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900">
              <Link to="/category/BBQ">BBQ</Link>
            </li>
            <li className=" hover:text-amber-400 transition-all cursor-pointer text-start  text-gray-900">
              <Link to="/category/Traditional Food">Traditional Food</Link>
            </li>
          </ul>
        </button>

        {/* list items ----- menu  ===========================*/}
        <ul className="flex justify-between items-center gap-20">
          <li className="text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all">
            <Link to="/">{t("nav.listOfDishes")}</Link>
          </li>
          <li className="text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all">
            <Link to="/becomeACook">{t("nav.becomeACook")}</Link>
          </li>
          <li className="text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all">
            <Link to="/">{t("nav.howItWorks")}</Link>
          </li>
          <li className=" text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all">
            <Link to="/about">{t("nav.aboutUs")}</Link>
          </li>
          <li className=" text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all">
            <Link to="/">{t("nav.contactUs")}</Link>
          </li>
          <li className=" text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all">
            <Link to="/faq">{t("nav.faq")}</Link>
          </li>
        </ul>

        {/*  recently viewed option ============================ */}
        <p className=" font-semibold cursor-pointer">
          {t("nav.recentlyViewed")}
        </p>
      </div>
    </div>
  );
};

export default LowerNav;
