import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Font from '../../themes/Font';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import i18n from '../../i18n';

const ViewallRow = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.viewAll}>{i18n.t('home:viewAll')}</Text>
      </Pressable>
    </View>
  );
};

export default ViewallRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vScale(17),
    paddingHorizontal: scale(25),
  },
  title: {
    fontFamily: Font.Medium,
    fontSize: fontScale(17),
    color: Colors.black,
  },
  viewAll: {
    fontFamily: Font.Light,
    fontSize: fontScale(13),
    color: Colors.label,
  },
});
