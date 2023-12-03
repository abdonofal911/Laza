import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Splash} from './src/screens/Splash';
import Navigator from './src/navigation';
import {useDispatch} from 'react-redux';
import {saveUserInfo} from './src/store/user';
import {getCartItems, getUserData} from './src/storage';
import {
  addToCart,
  addToCartFromLocal,
  clearCart,
  loadLocalCart,
} from './src/store/cart';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  const getUserDataFromLocalStorage = async () => {
    const response = await getUserData();
    console.log('getUserDataFromLocalStorage', response);
    if (response) {
      dispatch(saveUserInfo(response));
    }
  };
  const getUserCartItemsLocalStorage = async () => {
    const response = await getCartItems();
    console.log('getUserCartItemsLocalStorage', response);
    if (response && response.length > 0) {
      dispatch(loadLocalCart(response));
    }
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
    getUserCartItemsLocalStorage();
  }, []);
  return (
    <View style={{flex: 1}}>{showSplash ? <Splash /> : <Navigator />}</View>
  );
};

export default App;

const styles = StyleSheet.create({});
