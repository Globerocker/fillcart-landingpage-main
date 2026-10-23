import { en, type Dict } from '../i18n/en.ts';
import { de } from '../i18n/de.ts';
import type { Locale } from '../config/site.ts';

export const dicts: Record<Locale, Dict> = { en, de };
export const getDict = (lang: Locale): Dict => dicts[lang];
export const pageTitle = (dict: Dict, title: string) => `${title}${dict.meta.titleSuffix}`;
export type { Dict };
