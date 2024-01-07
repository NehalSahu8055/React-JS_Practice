import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: '',
      image: '',
      title: '',
      price: '',
      rating: '',
      count: '',
    },
  ],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { fetchData } = productSlice.actions;

export default productSlice.reducer;
