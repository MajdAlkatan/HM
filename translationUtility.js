import { translations } from './translations';

let currentLanguage = 'en'; // Default language

export function setLanguage(lang) {
  currentLanguage = lang;
}

export function t(key) {
  const keys = key.split('.');
  let result = translations[currentLanguage];

  for (let k of keys) {
    result = result[k];
    if (!result) return key; // Return key if translation is missing
  }

  return result;
}
