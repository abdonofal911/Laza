import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Alert} from 'react-native';
import {storeUserData} from '../storage';

const AUTH_URL = 'https://identitytoolkit.googleapis.com/v1';
const SERVER_KEY = 'AIzaSyCaPaqNjjWGQMlNvR2lmQgGEiC8CaZFY50';

export const login = createAsyncThunk(
  'user/login',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `${AUTH_URL}/accounts:signInWithPassword?key=${SERVER_KEY}`,
        {
          email,
          password,
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const signup = createAsyncThunk(
  'user/signup',
  async ({email, password, username}, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `${AUTH_URL}/accounts:signUp?key=${SERVER_KEY}`,
        {
          email,
          password,
          username,
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  email: '',
  idToken: '',
  loginLoader: false,
  signupLoader: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOutUser: (state, action) => {
      Object.assign(state, initialState);
    },
    saveUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('login.fulfilled : ', action.payload);
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
      state.loginLoader = false;
      storeUserData(action.payload);
      // console.log('storeUserData', action.payload);
    });
    builder.addCase(login.pending, (state, action) => {
      state.loginLoader = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      const errorResponse = action.payload;
      Alert.alert(errorResponse.response.data.error.message);
      state.loginLoader = false;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log('signup.fulfilled : ', action.payload);
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
      state.signupLoader = false;
      storeUserData(action.payload);
    });
    builder.addCase(signup.pending, (state, action) => {
      state.signupLoader = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      const errorResponse = action.payload;
      Alert.alert(errorResponse.response.data.error.message);
      state.signupLoader = false;
    });
  },
});
export default userSlice.reducer;
export const {logOutUser, saveUserInfo} = userSlice.actions;
