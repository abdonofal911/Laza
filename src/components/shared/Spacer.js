import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vScale} from '../../themes/Scale';

const Spacer = ({space}) => {
  return <View style={{height: vScale(space)}} />;
};

export default Spacer;

const styles = StyleSheet.create({});
