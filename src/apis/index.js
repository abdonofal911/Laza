// import axios from 'axios';
// import {Alert} from 'react-native';

// const BASE_URL = 'https://identitytoolkit.googleapis.com/v1';

// const SERVER_KEY = 'AIzaSyCaPaqNjjWGQMlNvR2lmQgGEiC8CaZFY50';

// const STORE_BASE_URL = 'https://fakestoreapi.com';

// export const API = axios.create({baseURL: STORE_BASE_URL});

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(
//       `${BASE_URL}/accounts:signInWithPassword?key=${SERVER_KEY}`,
//       {
//         email: email,
//         password: password,
//       },
//     );
//     return response.data;
//   } catch (error) {
//     handleError(error);
//   }
// };

// export const signup = async ({username, email, password}) => {
//   try {
//     const response = await axios.post(
//       `${BASE_URL}/accounts:signUp?key=${SERVER_KEY}`,
//       {
//         username: username,
//         email: email,
//         password: password,
//       },
//     );
//     return response.data;
//   } catch (error) {
//     handleError(error);
//   }
// };

// const handleError = error => {
//   Alert.alert(error.response.data.error.message);
// };

// // export const getAllCategories = async () => {
// //   try {
// //     const response = await axios.get(`${STORE_URL}/categories`);
// //     return console.log(response.data);
// //   } catch (error) {
// //     handleError(error);
// //   }
// // };

// // export const getMenProducts = async () => {
// //   try {
// //     const response = await axios.get(`${STORE_URL}/category/men's clothing`);
// //     return console.log(response.data);
// //   } catch (error) {
// //     handleError(error);
// //   }
// // };
// // export const getWomenProducts = async () => {
// //   try {
// //     const response = await axios.get(`${STORE_URL}/category/women's clothing`);
// //     return console.log(response.data);
// //   } catch (error) {
// //     handleError(error);
// //   }
// // };

// // export const getSingleProduct = async id => {
// //   try {
// //     const response = await axios.get(`${STORE_URL}/${id}`);
// //     return console.log(response.data);
// //   } catch (error) {
// //     handleError(error);
// //   }
// // };
