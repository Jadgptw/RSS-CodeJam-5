import i18n from 'i18next';
import { reactI18nextModule } from "react-i18next";

import translationEN from '../locales/en/photographs.json';
import translationRU from '../locales/ru/photographs.json';
import translationBY from '../locales/by/photographs.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  by: {
    translation: translationBY
  }
};

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "ru",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;