import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Header, ItemsCount} from '../../components/shared';
import Colors from '../../themes/Colors';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import {Products} from '../../dummyData';
import ProductCard from '../../components/shared/ProductCard';
import Spacer from '../../components/shared/Spacer';
import Font from '../../themes/Font';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../../store/products';
import i18n from '../../i18n';

const WishList = ({route, navigation}) => {
  const {products, getProductsLoader} = useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(6));
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        middleContent={() => (
          <Text style={styles.headerText}>{i18n.t('wishlist:wishlist')}</Text>
        )}
      />
      <View>
        <ItemsCount
          count={Products.length}
          subTitle={i18n.t('wishlist:inWishlist')}
        />
        <Spacer space={20} />
      </View>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <ProductCard
            {...item}
            onPress={() => {
              navigation.navigate('ProductDetails', {
                id: item.id,
              });
            }}
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          alignItems: 'center',
          width: sWidth,
        }}
        ItemSeparatorComponent={() => <View style={{height: vScale(15)}} />}
      />
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  logo: {
    width: scale(48),
    height: vScale(25),
  },
  headerText: {
    fontSize: fontScale(17),
    fontFamily: Font.Medium,
    color: Colors.black,
  },
});
