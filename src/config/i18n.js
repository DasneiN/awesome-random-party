import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import resources from './translations.json';

let lang = localStorage.getItem('lang');
if (!lang) {
  lang = navigator.language.slice(0, 2);
  if (!['ru', 'by', 'en'].includes(lang)) {
    lang = 'en';
  }
  localStorage.setItem('lang', lang);
}

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: lang,

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
