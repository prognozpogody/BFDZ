import { initState, InitStateStore } from "../initialState";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: initState.cart,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);

      return state;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const getCartSelector = (state: InitStateStore) => {
  console.log(state);

  return state.cart;
};
export const cartReducer = cartSlice.reducer;
