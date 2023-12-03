import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';
import {Rating, AirbnbRating} from 'react-native-ratings';

const ReviewCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <View style={styles.reviewInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View>
          <Text style={styles.ratingNumber}>
            {item.rating} <Text style={styles.rating}>rating</Text>
          </Text>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={15}
            startingValue={item.rating}
          />
        </View>
      </View>
      <Text style={styles.reviewText}>{item.reviewText}</Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {},
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: scale(60),
    height: scale(60),
    borderRadius: vScale(30),
  },
  reviewInfo: {
    flex: 1,
    marginStart: scale(10),
  },
  reviewText: {
    fontFamily: Font.Regular,
    fontSize: fontScale(15),
    color: Colors.label,
    marginTop: vScale(10),
    lineHeight: vScale(21),
    maxWidth: scale(334),
    textAlign: 'left',
  },
  name: {
    fontFamily: Font.SemiBold,
    color: Colors.black,
    fontSize: fontScale(17),
    textAlign: 'left',
  },
  date: {
    fontFamily: Font.Regular,
    color: Colors.label,
    fontSize: fontScale(11),
    textAlign: 'left',
  },
  rating: {
    fontFamily: Font.Regular,
    color: Colors.label,
    fontSize: fontScale(11),
    textAlign: 'left',
  },
  ratingNumber: {
    fontFamily: Font.Medium,
    color: Colors.black,
    fontSize: fontScale(15),
    textAlign: 'center',
    marginBottom: vScale(8),
  },
});
