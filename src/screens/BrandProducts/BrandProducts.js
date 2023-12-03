import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Header, ItemsCount} from '../../components/shared';
import Colors from '../../themes/Colors';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import {Products} from '../../dummyData';
import ProductCard from '../../components/shared/ProductCard';
import Spacer from '../../components/shared/Spacer';
import {useDispatch, useSelector} from 'react-redux';
import {getCategoriesProducts} from '../../store/products';
import Font from '../../themes/Font';
import i18n from '../../i18n';

const BrandProducts = ({route, navigation}) => {
  const {item} = route.params;

  const {categoryProducts, getCategoryProductsLoader} = useSelector(
    state => state.products,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesProducts(item));
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        middleContent={() => (
          <Text style={styles.headerMiddleContent}>{item}</Text>
        )}
      />
      {getCategoryProductsLoader ? (
        <ActivityIndicator size="large" color={Colors.mainColor} />
      ) : (
        <View>
          <ItemsCount
            sort
            count={categoryProducts.length}
            subTitle={i18n.t('wishlist:inStock')}
          />
          <Spacer space={20} />
          <FlatList
            data={categoryProducts}
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
            contentContainerStyle={{alignItems: 'center', width: sWidth}}
            ItemSeparatorComponent={() => <View style={{height: vScale(15)}} />}
          />
        </View>
      )}
    </View>
  );
};

export default BrandProducts;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  logo: {
    width: scale(48),
    height: vScale(25),
  },
  headerMiddleContent: {
    fontFamily: Font.Medium,
    fontSize: fontScale(18),
    color: Colors.black,
  },
});
