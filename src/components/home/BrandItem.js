import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';
import images from '../../assets/images';
import {Brands} from '../../dummyData';

const BrandItem = ({name, imageUrl, onPress, item}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* <View style={styles.logoContainer}>
        <Image
          source={{uri: Brands[1].imageUrl}}
          style={styles.logo}
          resizeMode="contain"
        />
      </View> */}
      <Text style={styles.name}>{item}</Text>
    </Pressable>
  );
};

export default BrandItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(10),
    height: vScale(48),
    backgroundColor: Colors.gray,
    borderRadius: vScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    width: scale(40),
    height: scale(40),
    borderRadius: vScale(10),
    backgroundColor: Colors.white,
    marginHorizontal: scale(5),
  },
  logo: {
    width: scale(30),
    height: vScale(23),
    alignSelf: 'center',
    marginTop: vScale(10),
  },
  name: {
    fontFamily: Font.SemiBold,
    fontSize: fontScale(16),
    color: Colors.black,
    marginHorizontal: scale(5),
    maxWidth: '100%',
  },
});
