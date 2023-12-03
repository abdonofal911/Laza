import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import {ImagePicker} from '../../components/camera';

const Camera = () => {
  return (
    <View style={styles.container}>
      <ImagePicker />
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});
