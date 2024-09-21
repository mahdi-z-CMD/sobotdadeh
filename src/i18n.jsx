import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFA from './persian.json';
import translationAR from './arabic.json';
import translationEN from './english.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fa: {
        translation: translationFA,
      },
      ar: {
        translation: translationAR,
      },
      en: {
        translation: translationEN,
      },
    },
    lng: 'fa', // Set Persian as the default language
    fallbackLng: 'fa', // Fallback to Persian if a translation is missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
