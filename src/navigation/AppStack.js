import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerStack from './DrawerStack';
import {BrandProducts} from '../screens/BrandProducts';
import {ProductDetails} from '../screens/ProductDetails';
import {AddReview, Reviews} from '../screens/Reviews';
import {OrderConfirmed} from '../screens/Cart';

const Stack = createStackNavigator();
const AppStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={DrawerStack} name="DrawerStack" />
      <Stack.Screen component={BrandProducts} name="BrandProducts" />
      <Stack.Screen component={ProductDetails} name="ProductDetails" />
      <Stack.Screen component={Reviews} name="Reviews" />
      <Stack.Screen component={AddReview} name="AddReview" />
      <Stack.Screen component={OrderConfirmed} name="OrderConfirmed" />
    </Stack.Navigator>
  );
};

export default AppStack;
