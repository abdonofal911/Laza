import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';
import i18n from '../../i18n';

const UserProfileRow = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1286',
        }}
        style={styles.profile}
      />
      <View style={styles.userInfoText}>
        <Text style={styles.username}>{i18n.t('drawer:username')}</Text>
        <Text style={styles.verified}>{i18n.t('drawer:verified')}</Text>
      </View>
      <View style={styles.ordersContainer}>
        <Text style={styles.orders}>3 {i18n.t('drawer:orders')}</Text>
      </View>
    </View>
  );
};

export default UserProfileRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vScale(30),
  },
  profile: {
    width: scale(45),
    height: scale(45),
    borderRadius: vScale(23),
  },
  userInfoText: {
    flex: 1,
    marginStart: scale(15),
  },
  ordersContainer: {
    width: scale(66),
    height: vScale(32),
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vScale(5),
  },
  username: {
    fontSize: fontScale(17),
    fontFamily: Font.Regular,
    color: Colors.black,
    textAlign: 'left',
  },
  verified: {
    marginTop: vScale(2),
    fontSize: fontScale(13),
    fontFamily: Font.Light,
    color: Colors.label,
    textAlign: 'left',
  },
  orders: {
    fontSize: fontScale(11),
    fontFamily: Font.Regular,
    color: Colors.label,
    textAlign: 'left',
  },
});
