import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productSlice";

export const store = configureStore({
  reducer: cartSlice,
});

// TODO : Add checkoutSlice
