import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log(action.payload);

      if (existingItem !== -1) {
        // FOUND SAME ITEM
        const item = state.cart[existingItem];
        item.quantity = item.quantity + 1;
        state.total = state.total + 1;
        return;
      }

      const newItem = {
        front: action.payload.front,
        back: action.payload.back,
        name: action.payload.name,
        type: action.payload.type,
        price: action.payload.price,
        id: action.payload.id,
        quantity: 1,
      };

      state.cart.push(newItem);
      state.total = state.total + 1;
    },
    removeFromCart: (state, action) => {
      const indexToRemove = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      const quantity = state.cart[indexToRemove].quantity;

      if (quantity === 1) {
        state.cart.splice(indexToRemove, 1);
        state.total = state.total - 1;

        return;
      }

      state.cart[indexToRemove].quantity =
        state.cart[indexToRemove].quantity - 1;

      state.total = state.total - 1;

      return;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
