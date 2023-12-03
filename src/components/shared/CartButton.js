import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import images from '../../assets/images';
import {scale} from '../../themes/Scale';
import Colors from '../../themes/Colors';

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Cart')}
      style={styles.bagContainer}>
      <Image source={images.bag} style={styles.bag} />
    </Pressable>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  bag: {
    width: scale(30),
    height: scale(30),
  },
  bagContainer: {
    backgroundColor: Colors.gray,
    opacity: 0.9,
    justifyContent: 'center',
    padding: 8,
    borderRadius: scale(30),
  },
});
