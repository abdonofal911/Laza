import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {addToCart, deleteItem, removeFromCart} from '../../store/cart';
import i18n from '../../i18n';

/*
    title: 'Nike Sportswear Club Fleece',
    imageUrl:
      'https://i.etsystatic.com/12614820/r/il/bfb5bd/4291747324/il_fullxfull.4291747324_gi6d.jpg',
    price: '99',
    id: 1,
  },*/
const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const plusHandler = () => {
    dispatch(addToCart(item));
  };

  const minusHandler = () => {
    dispatch(removeFromCart(item));
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          ${item.price} (-$4.00 {i18n.t('cart:tax')})
        </Text>
        <View style={styles.quantityRow}>
          <Pressable
            onPress={minusHandler}
            // disabled={item.quantity}
            style={styles.plusMinusContainer}>
            <Icon name="chevron-down" size={17} color={Colors.label} />
          </Pressable>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Pressable onPress={plusHandler} style={styles.plusMinusContainer}>
            <Icon name="chevron-up" size={17} color={Colors.label} />
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.delete}
        onPress={() => dispatch(deleteItem(item))}>
        <MaterialCommunityIcons name="delete-outline" size={24} />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: sWidth * 0.9,
    height: vScale(130),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    borderRadius: vScale(15),
  },
  image: {
    width: scale(100),
    height: scale(100),
    borderRadius: vScale(25),
    marginStart: scale(10),
  },
  title: {
    fontFamily: Font.Medium,
    fontSize: fontScale(14),
    maxWidth: scale(210),
    textAlign: 'left',
  },
  infoContainer: {
    paddingHorizontal: scale(10),
    marginVertical: vScale(35),
  },
  price: {
    fontSize: fontScale(11),
    fontFamily: Font.Regular,
    color: Colors.label,
    marginVertical: vScale(10),
    textAlign: 'left',
  },
  quantityRow: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusMinusContainer: {
    width: scale(25),
    height: scale(25),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.black,
    borderRadius: vScale(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: Font.Medium,
    fontSize: fontScale(13),
    color: Colors.black,
    paddingHorizontal: scale(20),
    textAlign: 'left',
  },
  delete: {
    // marginStart: scale(80),
    // marginTop: vScale(70),
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
