import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';

const Payment = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text>Payment</Text>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
