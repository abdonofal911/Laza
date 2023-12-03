import {I18nManager} from 'react-native';

export default {
  Light: I18nManager.isRTL ? 'Cairo-Light' : 'Inter-Light', // 300
  Regular: I18nManager.isRTL ? 'Cairo-Regular' : 'Inter-Regular', //400
  Medium: I18nManager.isRTL ? 'Cairo-Medium' : 'Inter-Medium', //500
  Bold: I18nManager.isRTL ? 'Cairo-Bold' : 'Inter-Bold', //600 700
  SemiBold: I18nManager.isRTL ? 'Cairo-SemiBold' : 'Inter-SemiBold',
};
