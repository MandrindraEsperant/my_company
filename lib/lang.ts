import { translations } from './translations';

export type Language = 'en' | 'fr';

export const DEFAULT_LANG: Language = 'en';
export const SUPPORTED_LANGS: Language[] = ['en', 'fr'];

export const isValidLang = (lang: unknown): lang is Language => {
  return SUPPORTED_LANGS.includes(lang as Language);
};

export const getLang = (lang: unknown): Language => {
  if (isValidLang(lang)) {
    return lang;
  }
  return DEFAULT_LANG;
};

export const t = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

export const getOtherLang = (lang: Language): Language => {
  return lang === 'en' ? 'fr' : 'en';
};
