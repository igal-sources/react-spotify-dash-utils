import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-xhr-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(backend)
  .init({
    fallbackLng: "en",
    lng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
