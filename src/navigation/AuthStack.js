import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GenderSelect from '../screens/GenderSelect/GenderSelect';
import {Login, Signup} from '../screens/Auth';
import AuthType from '../screens/Auth/AuthType';

const Stack = createStackNavigator();
const AuthStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GenderSelect" component={GenderSelect} />
      <Stack.Screen name="AuthType" component={AuthType} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
