import {createSlice} from '@reduxjs/toolkit';
import {storeCartItems} from '../storage';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExist = id => {
        return state.cartItems.find(cartItem => cartItem.id == id);
      };
      if (itemExist(action.payload.id)) {
        state.cartItems = state.cartItems.map(cartItem => {
          if (cartItem.id === action.payload.id) {
            return {...cartItem, quantity: cartItem.quantity + 1};
          }
          return cartItem;
        });
      } else {
        state.cartItems = [
          ...state.cartItems,
          {...action.payload, quantity: 1},
        ];
      }
      storeCartItems(state.cartItems);
    },

    loadLocalCart: (state, action) => {
      state.cartItems = action.payload;
    },
    removeFromCart: (state, action) => {
      const itemExist = state.cartItems.find(
        cartItem => cartItem.id === action.payload.id,
      );
      if (itemExist) {
        if (itemExist.quantity > 1) {
          itemExist.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id,
          );
        }
      }
      storeCartItems(state.cartItems);
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id,
      );
      storeCartItems(state.cartItems);
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      storeCartItems(state.cartItems);
    },
  },
});
export default cartSlice.reducer;
export const {addToCart, removeFromCart, clearCart, loadLocalCart, deleteItem} =
  cartSlice.actions;
