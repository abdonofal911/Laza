import {I18nManager, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const BackButton = ({style}) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" color={Colors.black} size={scale(25)} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  arrow: {
    height: vScale(45),
    width: scale(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vScale(45),
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    transform: [I18nManager.isRTL ? {rotate: '180deg'} : {rotate: '0deg'}],
  },
});
