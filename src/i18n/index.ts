import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { parse } from 'smol-toml';

import enToml from './en.toml?raw';
import frToml from './fr.toml?raw';

const en = parse(enToml);
const fr = parse(frToml);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
