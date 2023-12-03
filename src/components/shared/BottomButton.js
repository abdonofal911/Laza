import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppButton from './AppButton';
import {sWidth, vScale} from '../../themes/Scale';

const BottomButton = ({title, onPress, loading}) => {
  return (
    <AppButton
      style={styles.container}
      {...{title, onPress}}
      loading={loading}
    />
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  container: {
    width: sWidth,
    height: vScale(82),
    borderRadius: 0,
    position: 'absolute',
    bottom: 0,
  },
});
