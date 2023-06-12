import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './constants/en';
import es from './constants/es';

i18n
  .use(initReactI18next)
  .init({
      lng: 'en',
      fallbackLng: 'en',
      interpolation:{
          escapeValue: false
      },
      resources: {
        en, es
      }
  });

export default i18n;