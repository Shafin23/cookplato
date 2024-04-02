import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ro", // default language
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          text: "Your Cart",
        },
      },
      ro: {
        translation: {
          text: "Coșul dumneavoastră",
        },
      },
    },
  });

export default i18next
