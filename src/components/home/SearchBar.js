import {I18nManager, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../../themes/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import i18n from '../../i18n';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <EvilIcons name="search" size={30} style={styles.searchIcon} />
        <TextInput style={styles.input} placeholder={i18n.t('home:search')} />
      </View>
      <View style={styles.voiceIcon}>
        <MaterialIcons name="keyboard-voice" size={30} color={Colors.gray} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
  },
  input: {
    fontFamily: Font.Regular,
    fontSize: fontScale(16),
    flex: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: Colors.gray,
    borderRadius: vScale(10),
    marginEnd: scale(10),
  },
  searchIcon: {
    color: Colors.label,
    alignSelf: 'center',
    paddingHorizontal: scale(10),
  },
  voiceIcon: {
    backgroundColor: Colors.mainColor,
    width: scale(48),
    height: scale(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vScale(10),
  },
});
