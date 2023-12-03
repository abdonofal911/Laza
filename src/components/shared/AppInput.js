import {I18nManager, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';
import Icon from 'react-native-vector-icons/Entypo';

const AppInput = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  onBlur,
  errorMessage,
  onEndEditing,
  onFocus,
  autoCapitalize,
  password,
  ...rest
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const toggleSwitch = ({}) => {
    setHidePassword(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          {...{
            onChangeText,
            value,
            placeholder,
            onBlur,
            onEndEditing,
            onFocus,
            autoCapitalize,
          }}
          {...rest}
          style={styles.input}
          secureTextEntry={hidePassword}
        />
        {password && (
          <Icon
            name={hidePassword ? 'eye' : 'eye-with-line'}
            onPress={toggleSwitch}
            size={20}
          />
        )}
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(25),
    marginBottom: vScale(18),
  },
  label: {
    color: Colors.label,
    fontFamily: Font.Regular,
    fontSize: fontScale(13),
    marginBottom: vScale(10),
    textAlign: 'left',
  },
  input: {
    paddingBottom: vScale(10),
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: Colors.border,
    fontSize: fontScale(15),
    color: Colors.black,
    fontFamily: Font.Regular,
    flex: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  errorMessage: {
    fontFamily: Font.Light,
    color: Colors.red,
    fontSize: fontScale(12),
    marginTop: vScale(5),
    textAlign: 'left',
  },
});
