// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import mn from './locales/mn/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      mn: { translation: mn },
    },
    lng: 'en', // Эхний хэл
    fallbackLng: 'en', // Хэрэв орчуулах утга олдохгүй бол энэ хэлэнд шилжих
    interpolation: {
      escapeValue: false, // React-д зориулсан аюулгүй орчуулга
    },
  });

export default i18n;
