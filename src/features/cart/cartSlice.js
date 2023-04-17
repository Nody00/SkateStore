import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItem !== -1) {
        return;
      }

      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const indexToRemove = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      state.cart.splice(indexToRemove, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
