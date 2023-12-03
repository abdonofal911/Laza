import i18n from 'i18next';
import {I18nManager} from 'react-native';
import {initReactI18next} from 'react-i18next';
import languages from './locales';
import RNRestart from 'react-native-restart';
import 'intl-pluralrules';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: languages,
    lng: I18nManager.isRTL ? 'ar' : 'en',
  });

export const ChangeLanguage = () => {
  i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
    I18nManager.forceRTL(i18n.language === 'ar');
    RNRestart.Restart();
  });
};

export default i18n;
