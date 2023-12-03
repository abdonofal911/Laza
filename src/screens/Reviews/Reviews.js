import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ContainerView, Header} from '../../components/shared';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {Rating} from 'react-native-ratings';
import {FlatList} from 'react-native-gesture-handler';
import {ReviewsList} from '../../dummyData';
import {ReviewCard} from '../../components/reviews';
import i18n from '../../i18n';

const Reviews = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        middleContent={() => (
          <Text style={styles.headerText}>{i18n.t('reviews:theReviews')}</Text>
        )}
      />
      <ContainerView>
        <View style={styles.subHeader}>
          <View>
            <Text style={styles.subHeaderText}>
              {ReviewsList.length} {i18n.t('reviews:reviews')}
            </Text>
            <View style={styles.rateContainer}>
              <Text> 4.0 </Text>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={12}
                startingValue={4}
              />
            </View>
          </View>
          <Pressable
            style={styles.editButton}
            onPress={() => navigation.navigate('AddReview')}>
            <Feather name="edit" size={16} />
            <Text> {i18n.t('reviews:addReview')}</Text>
          </Pressable>
        </View>
        <FlatList
          scrollEnabled={false}
          data={ReviewsList}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => <ReviewCard item={item} />}
          contentContainerStyle={{
            paddingHorizontal: scale(20),
            marginVertical: vScale(15),
          }}
          ItemSeparatorComponent={() => <View style={{height: vScale(20)}} />}
        />
      </ContainerView>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: fontScale(17),
    fontFamily: Font.SemiBold,
    color: Colors.black,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
  },
  editButton: {
    width: scale(114),
    height: vScale(35),
    flexDirection: 'row',
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vScale(7),
    textAlign: 'left',
  },
  rateContainer: {
    marginTop: vScale(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeaderText: {
    fontSize: fontScale(17),
    fontFamily: Font.Medium,
    color: Colors.black,
    textAlign: 'left',
  },
});
