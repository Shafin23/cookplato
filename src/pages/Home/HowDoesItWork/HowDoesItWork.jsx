import { useTranslation } from 'react-i18next';
import HowDoesItWorkCard from './HowDoesItWorkCard/HowDoesItWorkCard';

const HowDoesItWork = () => {
const {t} = useTranslation()

    return (
        <div className=' w-[90vw] mx-auto  mt-5 border-b border-dashed pb-20'>
            <h1 className=' text-5xl font-semibold  text-center mb-16'>How Does it work?</h1>

            <div className=' grid grid-rows-4 grid-cols-1 md:grid-rows-1 md:grid-cols-4 w-full'>

                <HowDoesItWorkCard
                    title={t("howDoesItWorksec.chooseTheMenuYouWant")}
                    article={t("howDoesItWorksec.chooseTheMenuYouWantDes")}
                    img="/assets/images/pp3 1 (1).png"
                />

                <HowDoesItWorkCard
                    title={t("howDoesItWorksec.checkAvailability")}
                    article={t("howDoesItWorksec.checkAvailabilityDes")}
                    img="/public/assets/images/pp2-1 1 (1).png"
                />

                <HowDoesItWorkCard
                    title={t("howDoesItWorksec.BuyTheMenu")}
                    article={t("howDoesItWorksec.BuyTheMenuDes")}
                    img="/assets/images/pp1-1 1 (1).png"
                />

                <HowDoesItWorkCard
                     img="/public/assets/images/pp2-1 1 (1).png"
                    title={t("howDoesItWorksec.EnjoyTheExperience")}
                    article={t("howDoesItWorksec.EnjoyTheExperienceDes")}
                />

            </div>
        </div>
    );
};

export default HowDoesItWork;