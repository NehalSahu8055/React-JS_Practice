import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    // {
    //   id: '',
    //   image: '',
    //   title: '',
    //   price: '',
    //   rating: '',
    //   count: '',
    // },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, images, title, price, rating } = action.payload;

      const product = {
        id: id,
        image: images,
        title: title,
        price: price,
        rating: rating,
      };

      state.cart.push(product);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product.id != action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
