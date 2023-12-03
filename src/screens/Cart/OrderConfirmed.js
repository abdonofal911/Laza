import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {BottomButton, Header} from '../../components/shared';
import Colors from '../../themes/Colors';
import images from '../../assets/images';
import {fontScale, sHeight, sWidth, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import i18n from '../../i18n';

const OrderConfirmed = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header hideCart />
      <Image source={images.OrderConfirmed} style={styles.orderConfirmed} />
      <Text style={styles.orderConfirmedText}>{i18n.t('cart:confirmed')}</Text>
      <Text style={styles.orderConfirmedSubtext}>
        {i18n.t('cart:subConfirmed')}
      </Text>
      <Pressable>
        <Text style={styles.goToOrders}> {i18n.t('cart:goOrders')}</Text>
      </Pressable>
      <BottomButton
        title={i18n.t('cart:continue')}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  orderConfirmed: {
    width: scale(280),
    height: vScale(232),
    alignSelf: 'center',
    marginTop: vScale(100),
    marginBottom: vScale(40),
  },
  orderConfirmedText: {
    textAlign: 'center',
    fontFamily: Font.SemiBold,
    fontSize: fontScale(28),
    color: Colors.black,
    paddingBottom: vScale(10),
  },
  orderConfirmedSubtext: {
    textAlign: 'center',
    fontSize: fontScale(15),
    fontFamily: Font.Regular,
    color: Colors.label,
    lineHeight: 21,
  },
  goToOrders: {
    marginTop: vScale(160),
    textAlign: 'center',
    fontSize: fontScale(17),
    fontFamily: Font.SemiBold,
    color: Colors.label,
  },
});
