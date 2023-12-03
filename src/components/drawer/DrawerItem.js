import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';

const DrawerItem = ({title, icon, isLogout, onPress}) => {
  return (
    <Pressable
      style={isLogout ? styles.logoutContainer : styles.container}
      onPress={onPress}>
      <Image
        source={icon}
        style={styles.icon}
        tintColor={isLogout ? Colors.red : Colors.black}
      />
      <Text
        style={[styles.title, {color: isLogout ? Colors.red : Colors.black}]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vScale(25),
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vScale(25),
    position: 'absolute',
    bottom: 80,
  },
  icon: {
    width: scale(25),
    height: scale(25),
    marginEnd: scale(10),
  },
  title: {
    fontFamily: Font.Light,
    fontSize: fontScale(16),
    opacity: 0.8,
  },
});
