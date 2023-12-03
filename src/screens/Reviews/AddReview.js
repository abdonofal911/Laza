import {
  I18nManager,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {Header} from '../../components/shared';
import Colors from '../../themes/Colors';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import {Rating} from 'react-native-ratings';
import i18n from '../../i18n';

const AddReview = () => {
  function ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        middleContent={() => (
          <Text style={styles.headerText}>{i18n.t('reviews:addReview')}</Text>
        )}
      />
      <Text style={styles.labelText}>{i18n.t('reviews:name')}</Text>
      <TextInput
        placeholder={i18n.t('reviews:namePlaceholder')}
        style={styles.nameInput}
      />
      <Text style={styles.labelText}>{i18n.t('reviews:experience')}</Text>
      <TextInput
        placeholder={i18n.t('reviews:experiencePlaceholder')}
        style={styles.experienceInput}
      />
      <View style={styles.ratingContainer}>
        <Rating
          showRating
          ratingCount={5}
          imageSize={35}
          ratingTextColor={Colors.white}
          fractions={1}
          onFinishRating={rating => ratingCompleted(rating)}
        />
      </View>
    </View>
  );
};

export default AddReview;

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
  labelText: {
    fontSize: fontScale(17),
    fontFamily: Font.Medium,
    color: Colors.black,
    marginStart: scale(20),
    marginVertical: vScale(15),
    textAlign: 'left',
  },
  nameInput: {
    width: sWidth * 0.92,
    height: vScale(50),
    backgroundColor: Colors.gray,
    paddingStart: scale(15),
    alignSelf: 'center',
    borderRadius: vScale(10),
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  experienceInput: {
    width: sWidth * 0.92,
    paddingBottom: vScale(200),
    backgroundColor: Colors.gray,
    alignSelf: 'center',
    paddingStart: scale(15),
    paddingTop: vScale(15),
    borderRadius: vScale(10),
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  ratingContainer: {
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}], // Flip for RTL languages
  },
});
