import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationRU from "./components/assets/locales/ru/translation";
import translationEN from "./components/assets/locales/en/translation";
const fallbackLng = ['ru'];
const availableLanguages = ['ru', 'en'];

const resources = {
    ru: {
        translation: translationRU
    },
    en: {
        translation: translationEN
    }

};

i18n
    .use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        resources,
        fallbackLng, // fallback language is english.

        detection: {
            checkWhitelist: true, // options for language detection
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
    });

export default i18n;