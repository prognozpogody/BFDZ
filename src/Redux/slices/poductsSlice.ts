import { initState, InitStateStore } from "../initialState";
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: initState.products,

  reducers: {
    addProductQuickviews: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addProductQuickviews } = productsSlice.actions;
export const getProductQuickviews = (state: InitStateStore) => {
  return state.products;
};
export const productsReducer = productsSlice.reducer;
