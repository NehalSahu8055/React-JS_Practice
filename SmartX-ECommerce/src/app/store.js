import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import productSlice from '../features/productSlice';

// const rootReducer = combineReducers({
//   cart: cartSlice,
//   products: productSlice,
// });

export const store = configureStore({
  reducer: cartSlice,
});

// Redux Toolkit

// Store;
// Reducer;
// Dispatcher;
// Action;

// // global states

// action: addToCart;

// dispatch(addToCart(product));
