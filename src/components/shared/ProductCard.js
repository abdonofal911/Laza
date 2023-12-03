import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';

/*
  {
      "category":"men's clothing",
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "id":1,
      "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "price":109.95,
      "rating":{
         "count":120,
         "rate":3.9
      },
      "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
   },
 */

const ProductCard = ({title, image, price, onPress, id, getProductsLoader}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(12),
  },
  image: {
    width: scale(160),
    height: vScale(203),
    borderRadius: vScale(15),
  },
  title: {
    maxWidth: scale(136),
    marginVertical: vScale(5),
    fontSize: fontScale(12),
    fontFamily: Font.Regular,
    color: Colors.black,
    textAlign: 'left',
  },
  price: {
    fontSize: fontScale(14),
    fontFamily: Font.Medium,
    color: Colors.black,
    textAlign: 'left',
  },
});
