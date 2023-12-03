import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../../themes/Colors';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import AppButton from '../../components/shared/AppButton';
import {BottomButton, Header} from '../../components/shared';
import BackButton from '../../components/shared/BackButton';
import i18n from '../../i18n';

const AuthType = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header hideCart />
      <Text style={styles.getStarted}>{i18n.t('authType:start')}</Text>
      <View style={styles.socialContainer}>
        <AppButton
          title={i18n.t('authType:facebook')}
          style={[styles.socialButton, {backgroundColor: Colors.facebook}]}
          icon={() => (
            <EvilIcons
              name="sc-facebook"
              size={24}
              color={Colors.white}
              style={{marginStart: scale(20)}}
            />
          )}
        />
        <AppButton
          title={i18n.t('authType:twitter')}
          style={[styles.socialButton, {backgroundColor: Colors.twitter}]}
          icon={() => (
            <AntDesign
              name="twitter"
              size={20}
              color={Colors.white}
              style={{marginStart: scale(20)}}
            />
          )}
        />
        <AppButton
          title={i18n.t('authType:google')}
          style={[styles.socialButton, {backgroundColor: Colors.google}]}
          icon={() => (
            <AntDesign
              name="google"
              size={20}
              color={Colors.white}
              style={{marginStart: scale(20)}}
            />
          )}
        />
      </View>
      <Text style={styles.account}>
        {i18n.t('authType:haveAccount')}
        <Text
          style={styles.signin}
          onPress={() => navigation.navigate('Login')}>
          {' '}
          {i18n.t('authType:signin')}
        </Text>
      </Text>

      <BottomButton
        title={i18n.t('authType:signup')}
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default AuthType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  arrow: {
    height: vScale(45),
    width: scale(45),
    marginStart: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vScale(45),
    backgroundColor: Colors.gray,
    flexDirection: 'row',
  },
  getStarted: {
    fontSize: fontScale(28),
    fontFamily: Font.SemiBold,
    color: Colors.black,
    marginTop: vScale(25),
    textAlign: 'center',
  },
  socialContainer: {marginTop: vScale(185)},
  socialButton: {
    width: sWidth * 0.9,
    height: vScale(50),
    marginTop: vScale(8),
    borderRadius: vScale(10),
    justifyContent: 'center',
  },
  account: {
    marginTop: vScale(20),
    textAlign: 'center',
    color: Colors.label,
  },
  signin: {
    color: Colors.black,
    textAlign: 'left',
  },
});
