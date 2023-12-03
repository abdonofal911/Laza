import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import {getUserData, storeUserData} from '../../storage';
import {saveUserInfo} from '../../store/user';
import {useDispatch} from 'react-redux';
import i18n from '../../i18n';

const RememberMe = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const toggleSwitch = () => {
    setRememberMe(previousState => !previousState);
  };
  return (
    <View style={styles.container}>
      <Text>{i18n.t('auth:rememberMe')}</Text>
      <Switch
        trackColor={rememberMe ? Colors.green : Colors.label}
        thumbColor={rememberMe ? Colors.white : Colors.gray}
        onValueChange={toggleSwitch}
        value={rememberMe}
        style={styles.switch}
      />
    </View>
  );
};

export default RememberMe;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(25),
  },
  switch: {transform: [{scaleX: 0.7}, {scaleY: 0.7}]},
});
