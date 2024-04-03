import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslation from '../../public/locales/en.json'
import roTranslation from '../../public/locales/ro.json'

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
  fallbackLng: "ro",
  detection: {
    order: ["localStorage", "navigator"],
  }, 
  lng: "ro",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ro: {
      translation: roTranslation.translation
    },
    en: {
      translation: enTranslation.translation,
    },
  },
});
export default i18next
