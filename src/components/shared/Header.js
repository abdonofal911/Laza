import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, vScale} from '../../themes/Scale';
import CartButton from './CartButton';
import BackButton from './BackButton';

const Header = ({middleContent, hideCart}) => {
  return (
    <View style={styles.topButtonsContainer}>
      <Pressable onPress={() => navigation.toggleDrawer()}>
        <BackButton />
      </Pressable>
      {middleContent && middleContent()}
      {!hideCart && <CartButton />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    paddingBottom: vScale(20),
    alignItems: 'center',
  },
});
