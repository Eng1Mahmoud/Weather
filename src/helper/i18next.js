import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
export const i18nInit = () =>
    i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(HttpApi)
        .init({
            fallbackLng: "en",
            detection: {
                order: ["cookie", "htmlTag"],
                caches: ["cookie"],
            },
            backend: {
                loadPath: "/locale/{{lng}}/{{ns}}.json",
            },
            react: {
                useSuspense: false, // Set this to true if using Suspense
            },
        });
