import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import images from '../../assets/images';
import {scale, vScale} from '../../themes/Scale';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: scale(60),
    height: vScale(36),
  },
});
