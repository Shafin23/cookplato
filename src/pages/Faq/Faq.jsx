import { useTranslation } from "react-i18next";
import FaqData from "./FaqData";

const Faq = () => {
  const { t } = useTranslation();


  // TODO: RESPONSIVE OF FAQ PAGE IS NOT YET DONE
  return (
    // <div className="grid md:grid-cols-3 lg:justify-center border mx-4 w-11/12 lg:w-4/5 lg:mx-auto gap-20 my-14">
    <div className="mx-4 my-10 grid grid-cols-1 lg:gap-7 md:grid-cols-2 lg:grid-cols-3">
      {/* contact page part */}
      <div className="flex flex-col mb-10 md:items-center text-start space-y-9">
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-[#FAB528]">ORDERING INFORMATION</h1>
          <h3 className="font-semibold text-[#888888]">
            Cancellation and refund policy
          </h3>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-[#9D2B69]">Need more help?</p>
          <button className="text-[#222222] font-semibold bg-[#F7F7F7] py-2 px-10 border-[1px] border-[#E5E5E5] rounded w-52">
            Contact Us
          </button>
        </div>
      </div>
      {/* Faq 1st section */}
        <div className="mb-5">
          <FaqData
            title={t("faq.whatIsCookplato")}
            color={'border-2 border-b border-[#EEEEEE]'}
            description={t("faq.cookplatoDescription")}
          />
          <FaqData
            title={t("faq.howIsPaymentMade")}
            color={'border-2 border-b border-[#EEEEEE]'}
            description={t("faq.paymentProcess")}
          />
          <FaqData
            title={t("faq.howCanIContactCustomerService")}
            color={'border-2 border-b border-[#EEEEEE]'}
            description={t("faq.contactCustomerService")}
          />
          <FaqData
            title={t("faq.rentAChef")}
            description={t("faq.rentAChefDescription")}
          />
        </div>
        {/* Faq 2nd Section */}
        <div className="md:col-start-2 lg:col-start-auto">
          <FaqData
            title={t("faq.howCanIChooseAChef")}
            color={'border-2 border-b border-[#EEEEEE]'}
            description={t("faq.chooseAChef")}
          />
          <FaqData
            title={t("faq.howCanIBecomeACook")}
            color={'border-2 border-b border-[#EEEEEE]'}
            description={t("faq.becomeACook")}
          />
          <FaqData
            title={t("faq.howMuchDoesAPersonalChefCost")}
            color={'border-2 border-b border-[#EEEEEE]'}
            description={t("faq.personalChefCost")}
          />
          <FaqData
            title={t("faq.lookingForAChef")}
            description={t("faq.welcomeToCookplato")}
          />
        </div>
    </div>
  );
};

export default Faq;
