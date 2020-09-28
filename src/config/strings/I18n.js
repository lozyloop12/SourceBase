import I18n from 'react-native-i18n';
import en from './en.json';
import fr from './fr.json';
import Constants from '../../constants/Constant';

I18n.fallbacks = true;

I18n.translations = {
    en, fr,
};

export function multiLanguage(name, locale) {
    let localeUser = Constants.LOCALE;
    return I18n.t(name, { locale: localeUser ? localeUser : locale });
}

export function multiLanguageDefault(name) {
    return I18n.t(name, { locale: I18n.defaultLocale });
}

export default I18n;
