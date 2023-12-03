import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import Colors from '../../themes/Colors';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import AppButton from '../../components/shared/AppButton';
import Font from '../../themes/Font';
import i18n from '../../i18n';

const GenderSelect = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={images.genderSelect}>
      <View style={styles.viewContainer}>
        <Text style={styles.title}>{i18n.t('genderSelect:header')}</Text>
        <Text style={styles.subTitle}>{i18n.t('genderSelect:subHeader')} </Text>
        <View style={styles.genderContainer}>
          <AppButton
            style={[styles.gender, {backgroundColor: Colors.gray}]}
            title={i18n.t('genderSelect:men')}
            textStyle={styles.menText}
          />
          <AppButton
            style={styles.gender}
            title={i18n.t('genderSelect:women')}
          />
        </View>
        <Pressable onPress={() => navigation.navigate('AuthType')}>
          <Text style={styles.skipText}>{i18n.t('genderSelect:skip')}</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default GenderSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
  viewContainer: {
    width: sWidth * 0.9,
    backgroundColor: Colors.white,
    borderRadius: vScale(15),
    position: 'absolute',
    bottom: vScale(0),
    alignSelf: 'center',
    margin: scale(15),
    paddingVertical: vScale(25),
    alignItems: 'center',
  },
  gender: {
    width: scale(160),
    height: vScale(60),
    justifyContent: 'center',
  },
  title: {
    fontFamily: Font.Medium,
    fontSize: fontScale(25),
    textAlign: 'center',
    color: Colors.black,
    textAlign: 'left',
  },
  subTitle: {
    fontFamily: Font.Regular,
    fontSize: fontScale(15),
    textAlign: 'center',
    marginVertical: vScale(10),
    color: Colors.label,
    maxWidth: '95%',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: vScale(20),
    width: '100%',
  },
  menText: {
    color: Colors.black,
    textAlign: 'center',
  },
  skipText: {
    color: Colors.label,
    alignSelf: 'center',
    marginTop: vScale(25),
  },
});
