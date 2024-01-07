import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  checkout: [
    {
      id: "",
      address: "",
      paymentMethod: "",
    },
  ],
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCheckoutData: (state, action) => {
      const { id, address, paymentMethod } = action.payload;

      const product = {
        id: id,
        address: address,
        paymentMethod: paymentMethod,
      };

      state.cart.push(product);
    },
  },
});

export const { addCheckoutData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
