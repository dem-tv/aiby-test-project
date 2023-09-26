import {availableLocalisations, DEFAULT_LANG} from "./constants";

export const getUrlLang = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('lang');
}

export const getLocaleObject = () => {
  let lang = getUrlLang();
  if(!lang || !availableLocalisations.includes(lang)){
    lang = navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
    if(!availableLocalisations.includes(lang)){
      lang = DEFAULT_LANG
    }
  }
  try {
    const locales = require(`./i18n/${lang}.json`)
    return locales
  } catch(err){
    console.log(err)
    return null
  }
}