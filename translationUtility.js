// translationUtility.js
import { translations } from './translations';

let currentLanguage = 'en'; // Default language

export function setLanguage(lang) {
  currentLanguage = lang;
}

export function t(key) {
  return translations[currentLanguage].navbar[key];
}
