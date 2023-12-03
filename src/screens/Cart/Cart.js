import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import {BottomButton, ContainerView, Header} from '../../components/shared';
import {CartItem} from '../../components/cart';
import Icon from 'react-native-vector-icons/Entypo';
import images from '../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import Spacer from '../../components/shared/Spacer';
import {clearCart} from '../../store/cart';
import i18n from '../../i18n';

const Cart = ({navigation}) => {
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const calculateTotalPrice = () => {
    let subtotal = 0;
    cartItems.map(item => {
      subtotal += item.price * item.quantity;
    });
    return Number(subtotal.toFixed(2));
  };

  const subtotal = calculateTotalPrice();
  const shippingFees = subtotal > 100 ? 15 : 10;

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        middleContent={() => (
          <Text style={styles.headerText}>{i18n.t('cart:cart')}</Text>
        )}
        hideCart
      />
      {cartItems.length > 0 ? (
        <>
          <ContainerView>
            <FlatList
              scrollEnabled={false}
              data={cartItems}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => <CartItem item={item} />}
              contentContainerStyle={{
                paddingHorizontal: scale(20),
                marginVertical: vScale(15),
                width: sWidth,
              }}
              ItemSeparatorComponent={() => (
                <View style={{height: vScale(20)}} />
              )}
            />
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>
                {i18n.t('cart:delivery')}
              </Text>
              <Icon name="chevron-right" size={15} />
            </View>
            <View style={styles.sectionContainer}>
              <ImageBackground source={images.location} style={styles.location}>
                <Icon name="location-pin" color={Colors.orange} size={25} />
              </ImageBackground>
              <View style={{flex: 1}}>
                <Text style={styles.locationText}>
                  Chhatak, Sunamgonj 12/8AB
                </Text>
                <Text style={styles.country}>Sylhet</Text>
              </View>
              <View style={styles.Icon}>
                <Icon name="check" size={20} color={Colors.white} />
              </View>
            </View>
            {/*Payment*/}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>
                {i18n.t('cart:payment')}
              </Text>
              <Icon name="chevron-right" size={15} />
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.paymentType}>
                <Text>Visa</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.locationText}>Visa Classic</Text>
                <Text style={styles.country}>**** **** **** 7690</Text>
              </View>
              <View style={styles.Icon}>
                <Icon name="check" size={20} color={Colors.white} />
              </View>
            </View>
            <Text style={styles.orderInfo}>{i18n.t('cart:orderInfo')}</Text>
            <View style={styles.feesRow}>
              <Text style={styles.feesType}>{i18n.t('cart:subtotal')}</Text>
              <Text style={styles.fees}>${subtotal}</Text>
            </View>
            <View style={styles.feesRow}>
              <Text style={styles.feesType}>{i18n.t('cart:shipping')}</Text>
              <Text style={styles.fees}>${shippingFees}</Text>
            </View>
            <View style={styles.feesRow}>
              <Text style={styles.feesType}>{i18n.t('cart:total')}</Text>
              <Text style={styles.fees}>${subtotal + shippingFees}</Text>
            </View>
          </ContainerView>
          <Spacer space={80} />
          <BottomButton
            title={i18n.t('cart:checkout')}
            onPress={() => {
              navigation.navigate('OrderConfirmed');
              dispatch(clearCart());
            }}
          />
        </>
      ) : (
        <Text style={styles.noItemsText}>{i18n.t('cart:noItems')}</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: fontScale(17),
    fontFamily: Font.SemiBold,
    color: Colors.black,
    flex: 1,
    textAlign: 'center',
    paddingEnd: scale(45),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(22),
    marginVertical: vScale(20),
  },
  sectionHeaderText: {
    fontSize: fontScale(17),
    fontFamily: Font.Medium,
    color: Colors.black,
    textAlign: 'left',
  },

  sectionContainer: {
    flexDirection: 'row',
    marginHorizontal: scale(20),
    alignItems: 'center',
  },
  location: {
    width: scale(50),
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: fontScale(15),
    fontFamily: Font.Regular,
    color: Colors.black,
    paddingStart: scale(10),
    paddingVertical: vScale(5),
    textAlign: 'left',
  },
  country: {
    fontSize: fontScale(13),
    fontFamily: Font.Regular,
    color: Colors.label,
    paddingStart: scale(10),
    textAlign: 'left',
  },
  Icon: {
    width: scale(30),
    height: scale(30),
    backgroundColor: Colors.green,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vScale(15),
  },
  paymentType: {
    width: scale(50),
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    borderRadius: vScale(10),
  },
  orderInfo: {
    fontSize: fontScale(17),
    fontFamily: Font.Medium,
    color: Colors.black,
    paddingStart: scale(20),
    paddingVertical: vScale(20),
    textAlign: 'left',
  },
  feesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    marginBottom: vScale(10),
  },
  fees: {
    fontSize: fontScale(13),
    fontFamily: Font.Regular,
    color: Colors.black,
    textAlign: 'left',
  },

  feesType: {
    fontSize: fontScale(15),
    fontFamily: Font.Regular,
    color: Colors.label,
    textAlign: 'left',
  },
  noItemsText: {
    textAlign: 'center',
    fontFamily: Font.Medium,
    color: Colors.black,
    fontSize: fontScale(18),
    paddingVertical: vScale(50),
  },
});
