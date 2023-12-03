import AsyncStorage from '@react-native-async-storage/async-storage';

// User Data

export const storeUserData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userData', jsonValue);
  } catch (e) {
    console.log('Save user data error', e);
  }
};

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Read user data error', e);
  }
};

export const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem('userData');
    console.log('User data removed');
  } catch (error) {
    console.log('Remove user data error', error);
  }
};
// Cart Items
export const storeCartItems = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('cartItems', jsonValue);
    console.log('storeCartItemsLocal', jsonValue);
  } catch (e) {
    console.log('Save user Cart error', e);
  }
};
export const getCartItems = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('cartItems');
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log('get user Cart error', e);
  }
};
export const removeCartItems = async () => {
  try {
    await AsyncStorage.removeItem('cartItems');
    console.log('cart Items removed');
  } catch (error) {
    console.log('Remove user Cart error', error);
  }
};
