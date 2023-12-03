import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';
import i18n from '../../i18n';

const ItemsCount = ({sort, count, subTitle}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.count}>
          {count} {i18n.t('wishlist:items')}
        </Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      {sort && (
        <View style={styles.sortContainer}>
          <MaterialIcons name="sort" size={18} />
          <Text style={styles.sortText}>Sort</Text>
        </View>
      )}
    </View>
  );
};

export default ItemsCount;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    alignItems: 'center',
  },
  count: {
    fontFamily: Font.Medium,
    fontSize: fontScale(17),
    color: Colors.black,
    textAlign: 'left',
  },
  subTitle: {
    fontSize: fontScale(14),
    fontFamily: Font.Light,
    color: Colors.label,
    textAlign: 'left',
  },
  sortContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.gray,
    paddingVertical: vScale(10),
    paddingHorizontal: scale(10),
    borderRadius: vScale(10),
    textAlign: 'left',
  },
  sortText: {
    marginStart: scale(1),
    fontSize: fontScale(14),
    fontFamily: Font.Regular,
    color: Colors.black,
    textAlign: 'left',
  },
});
