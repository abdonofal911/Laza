import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../themes/Colors';
import {fontScale} from '../../themes/Scale';
import Font from '../../themes/Font';

const TabBarButton = ({focused, label, iconName}) => {
  return (
    <View>
      {focused ? (
        <Text style={styles.textLabel}>{label}</Text>
      ) : (
        <Ionicons name={iconName} size={24} color={Colors.label} />
      )}
    </View>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  textLabel: {
    fontSize: fontScale(12),
    fontFamily: Font.Medium,
    color: Colors.mainColor,
  },
});
