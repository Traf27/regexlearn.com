import en from './en';
import es from './es';
import tr from './tr';
import pl from './pl';
import ru from './ru';

const messages = {
  en,
  es,
  tr,
  pl,
  ru,
};

export const langNames = {
  en: 'EN',
  es: 'ES',
  tr: 'TR',
  pl: 'PL',
  ru: 'RU',
};

export const defaultLocale = 'en';

export const locales = Object.keys(langNames);

export default messages;
