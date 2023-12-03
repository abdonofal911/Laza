import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../../themes/Colors';
import images from '../../assets/images';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import CartButton from '../../components/shared/CartButton';
import {BrandItem, SearchBar} from '../../components/home';
import {ContainerView, ViewallRow} from '../../components/shared';
import {FlatList} from 'react-native-gesture-handler';
import ProductCard from '../../components/shared/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories, getAllProducts} from '../../store/products';
import i18n from '../../i18n';

const Home = ({navigation}) => {
  const {products, getProductsLoader, categories, getCategoriesLoader} =
    useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(6));
    dispatch(getAllCategories());
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.topButtonsContainer}>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image source={images.menu} style={styles.menu} />
        </Pressable>
        <CartButton />
      </View>

      <ContainerView>
        <Text style={styles.header}>{i18n.t('home:home')}</Text>
        <Text style={styles.subTitle}>{i18n.t('home:welcome')}</Text>
        <SearchBar />
        <ViewallRow title={i18n.t('home:chooseBrands')} onPress={() => {}} />

        {getCategoriesLoader ? (
          <ActivityIndicator
            size="large"
            color={Colors.mainColor}
            style={styles.loader}
          />
        ) : (
          <FlatList
            data={categories}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <BrandItem
                item={item}
                onPress={() =>
                  navigation.navigate('BrandProducts', {
                    item,
                  })
                }
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: scale(25),
            }}
            ItemSeparatorComponent={() => <View style={{width: scale(10)}} />}
          />
        )}
        <ViewallRow title={i18n.t('home:newArrival')} onPress={() => {}} />

        {getProductsLoader ? (
          <ActivityIndicator
            size="large"
            color={Colors.mainColor}
            style={styles.productsLoader}
          />
        ) : (
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
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{height: vScale(15)}} />}
          />
        )}
      </ContainerView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    paddingBottom: vScale(20),
  },
  menu: {
    width: scale(48),
    height: scale(48),
  },
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
  header: {
    fontFamily: Font.Bold,
    fontSize: fontScale(26),
    color: Colors.black,
    marginTop: vScale(10),
    marginStart: scale(20),
    textAlign: 'left',
  },
  subTitle: {
    fontFamily: Font.Regular,
    fontSize: fontScale(16),
    color: Colors.label,
    marginStart: scale(20),
    marginBottom: vScale(20),
    textAlign: 'left',
  },
  productsLoader: {alignSelf: 'center', marginTop: vScale(100)},
});
