import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';

const AppButton = ({title, onPress, style, textStyle, icon, loading}) => {
  return (
    <Pressable style={[styles.container, style]} {...{onPress}}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="small" color={Colors.white} />
        </View>
      ) : (
        <>
          <View style={styles.icon}>{icon && icon()}</View>
          <Text style={[styles.text, textStyle]}>{title}</Text>
          <View style={styles.icon} />
        </>
      )}
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: scale(353),
    height: vScale(67),
    backgroundColor: Colors.mainColor,
    borderRadius: vScale(19),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
  },
  text: {
    color: Colors.white,
    fontFamily: Font.Medium,
    fontSize: fontScale(18),
    textAlign: 'center',
  },
  icon: {
    width: scale(50),
    marginHorizontal: scale(3),
  },
  loading: {alignSelf: 'center', width: '100%'},
});
