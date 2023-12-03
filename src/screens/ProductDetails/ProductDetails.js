import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BottomButton, ContainerView, Header} from '../../components/shared';
import Colors from '../../themes/Colors';
import {ProductOverview, Products, ReviewsList, sizes} from '../../dummyData';
import {fontScale, sHeight, sWidth, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Spacer from '../../components/shared/Spacer';
import {ReviewCard} from '../../components/reviews';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetails} from '../../store/products';
import {addToCart} from '../../store/cart';
import i18n from '../../i18n';

const ProductDetails = ({route, navigation}) => {
  const {id} = route.params;
  const [selectedSize, setSelectedSize] = useState();
  const dispatch = useDispatch();
  const {productDetails, getProductDetailsLoader} = useSelector(
    state => state.products,
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);
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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView />
        <Header />
      </View>
      {getProductDetailsLoader ? (
        <ActivityIndicator
          size="large"
          color={Colors.mainColor}
          style={styles.loader}
        />
      ) : (
        <ContainerView>
          <Image source={{uri: productDetails.image}} style={styles.image} />
          <View style={styles.headerTextRow}>
            <Text style={styles.headerText}>{productDetails.category}</Text>
            <Text style={styles.headerText}>
              {i18n.t('productDetails:price')}
            </Text>
          </View>
          <View style={styles.headerTextRow}>
            <Text style={styles.subTitleText}>{productDetails.title}</Text>
            <Text style={styles.subTitleText}>${productDetails.price}</Text>
          </View>
          <FlatList
            data={ProductOverview}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <Image source={{uri: item}} style={styles.smallImage} />
            )}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: scale(10)}} />}
            contentContainerStyle={styles.imagesList}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.sizeHeaderContainer}>
            <Text style={styles.sizeText}>{i18n.t('productDetails:size')}</Text>
            <Text style={styles.sizeGuideText}>
              {i18n.t('productDetails:sizeGuide')}
            </Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.sizeScrollContainer}
            showsHorizontalScrollIndicator={false}>
            {sizes.map((item, index) => (
              <Pressable
                key={index}
                style={[
                  styles.sizeContainer,
                  {
                    backgroundColor:
                      selectedSize == item.id ? Colors.mainColor : Colors.gray,
                  },
                ]}
                onPress={() =>
                  setSelectedSize(selectedSize == item.id ? null : item.id)
                }>
                <Text
                  style={[
                    styles.selectedSizeText,
                    {
                      color:
                        selectedSize == item.id ? Colors.white : Colors.black,
                    },
                  ]}>
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
          <Text style={styles.descriptionHeader}>
            {i18n.t('productDetails:description')}
          </Text>
          <Text style={styles.descriptionText}>
            {productDetails.description}{' '}
            <Text style={styles.readMore}>
              {i18n.t('productDetails:readMore')}
            </Text>
          </Text>
          <Spacer space={15} />
          <View style={styles.sizeHeaderContainer}>
            <Text style={styles.sizeText}>
              {i18n.t('productDetails:reviews')}
            </Text>
            <Pressable onPress={() => navigation.navigate('Reviews')}>
              <Text style={styles.sizeGuideText}>
                {i18n.t('productDetails:viewAll')}
              </Text>
            </Pressable>
          </View>
          <FlatList
            scrollEnabled={false}
            data={ReviewsList.slice(0, 1)}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <ReviewCard item={item} />}
            contentContainerStyle={{
              paddingHorizontal: scale(20),
              marginVertical: vScale(15),
              // width: sWidth,
              // alignItems: 'center',
            }}
          />
          <View style={styles.totalPrice}>
            <View>
              <Text style={styles.totalPriceText}>
                {i18n.t('productDetails:totalPrice')}
              </Text>
              <Text style={styles.totalPriceSubText}>
                {i18n.t('productDetails:withVat')}
              </Text>
            </View>
            <Text style={styles.subTitleText}>
              ${productDetails.price + Math.ceil(productDetails.price * 0.07)}
            </Text>
          </View>
        </ContainerView>
      )}
      <Spacer space={82} />
      <BottomButton
        title="Add to Cart"
        onPress={() => dispatch(addToCart(productDetails))}
      />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    width: sWidth,
    position: 'absolute',
    zIndex: 100,
  },
  image: {
    width: sWidth,
    height: vScale(420),
  },
  headerTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: Colors.label,
    fontFamily: Font.Light,
    fontSize: fontScale(13),
    marginTop: vScale(12),
    marginHorizontal: scale(20),
    textAlign: 'left',
  },
  subTitleText: {
    color: Colors.black,
    fontFamily: Font.Medium,
    fontSize: fontScale(22),
    marginTop: vScale(8),
    maxWidth: '60%',
    marginHorizontal: scale(20),
    textAlign: 'left',
  },
  smallImage: {
    width: scale(77),
    height: scale(77),
    borderRadius: vScale(10),
  },
  imagesList: {
    paddingHorizontal: scale(20),
    marginTop: vScale(20),
    marginBottom: vScale(15),
  },
  sizeHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
  },
  sizeText: {
    color: Colors.black,
    fontFamily: Font.Regular,
    fontSize: fontScale(17),
    textAlign: 'left',
  },
  sizeGuideText: {
    color: Colors.label,
    fontFamily: Font.Light,
    fontSize: fontScale(14),
    textAlign: 'left',
  },
  sizeScrollContainer: {
    paddingHorizontal: scale(20),
    marginTop: vScale(10),
  },
  sizeContainer: {
    backgroundColor: Colors.mainColor,
    width: scale(60),
    height: scale(60),
    justifyContent: 'center',
    marginEnd: scale(9),
    borderRadius: vScale(10),
  },
  sizeText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(17),
    color: Colors.black,
    textAlign: 'left',
  },
  selectedSizeText: {
    textAlign: 'center',
    fontFamily: Font.Regular,
    fontSize: fontScale(17),
  },
  descriptionHeader: {
    fontFamily: Font.Medium,
    fontSize: fontScale(17),
    color: Colors.black,
    marginStart: scale(20),
    marginTop: vScale(20),
    textAlign: 'left',
  },
  descriptionText: {
    fontFamily: Font.Light,
    color: Colors.label,
    marginHorizontal: scale(20),
    fontSize: fontScale(14),
    marginTop: vScale(7),
    textAlign: 'left',
  },
  readMore: {
    fontFamily: Font.Medium,
    color: Colors.black,
  },
  totalPrice: {
    flexDirection: 'row',
    marginHorizontal: scale(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: vScale(10),
  },
  totalPriceText: {
    fontFamily: Font.SemiBold,
    fontSize: fontScale(15),
    color: Colors.black,
    marginBottom: vScale(5),
    textAlign: 'left',
  },
  totalPriceSubText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(11),
    color: Colors.label,
    textAlign: 'left',
  },
  loader: {
    marginTop: sHeight * 0.4,
  },
});
