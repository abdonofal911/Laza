import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user';
import productsReducer from './products';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
