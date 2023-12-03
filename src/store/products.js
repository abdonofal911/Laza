import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

/*
  {
      "category":"men's clothing",
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "id":1,
      "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "price":109.95,
      "rating":{
         "count":120,
         "rate":3.9
      },
      "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
   },
 */
const STORE_BASE_URL = 'https://fakestoreapi.com';
export const API = axios.create({baseURL: STORE_BASE_URL});

const initialState = {
  categories: [],
  products: [],
  productDetails: {},
  categoryProducts: [],
  getCategoriesLoader: false,
  getProductsLoader: false,
  getProductDetailsLoader: false,
  getCategoryProductsLoader: false,
};

export const getAllCategories = createAsyncThunk(
  'products/getAllCategories',
  async (_args, {rejectWithValue}) => {
    try {
      const response = await API.get(`/products/categories`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// get mens Products
export const getAllProducts = createAsyncThunk(
  'products/getMensProducts',
  async (limit, {rejectWithValue}) => {
    try {
      const response = await API.get(`/products?limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// get single Product with id
export const getProductDetails = createAsyncThunk(
  'products/getProductDetails',
  async (id, {rejectWithValue}) => {
    try {
      const response = await API.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const getCategoriesProducts = createAsyncThunk(
  'products/getCategoriesProducts',
  async (category, {rejectWithValue}) => {
    try {
      const response = await API.get(`/products/category/${category}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.getProductsLoader = false;
    });
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.getProductsLoader = true;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.getProductsLoader = false;
      const errorResponse = action.payload.response;
      console.log('getAllProducts.rejected ', errorResponse);
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.getCategoriesLoader = false;
    });
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.getCategoriesLoader = true;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.getCategoriesLoader = false;
      const errorResponse = action.payload.response;
      console.log('getAllCategories.rejected', errorResponse);
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
      state.getProductDetailsLoader = false;
    });
    builder.addCase(getProductDetails.pending, (state, action) => {
      state.getProductDetailsLoader = true;
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.getProductDetailsLoader = false;
      const errorResponse = action.payload.response;
      console.log('getProductDetails.rejected', errorResponse);
    });
    builder.addCase(getCategoriesProducts.fulfilled, (state, action) => {
      state.categoryProducts = action.payload;
      state.getCategoryProductsLoader = false;
    });
    builder.addCase(getCategoriesProducts.pending, (state, action) => {
      state.getCategoryProductsLoader = true;
    });
    builder.addCase(getCategoriesProducts.rejected, (state, action) => {
      state.getCategoryProductsLoader = false;
      const errorResponse = action.payload.response;
      console.log('getProductDetails.rejected', errorResponse);
    });
  },
});
export default productsSlice.reducer;
