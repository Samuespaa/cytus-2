import { createI18n } from 'vue-i18n';
import es from "./src/locales/es.json";
import en from "./src/locales/en.json";

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    es: es,
    en: en,
  }
});

export default i18n;