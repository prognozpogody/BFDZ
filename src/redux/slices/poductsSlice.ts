import { CardProducts } from "../../types/products.interface";
import { getInitState, InitStateStore } from "../initialState";
import { createSlice } from "@reduxjs/toolkit";


export const productsSlice = createSlice({
  name: "products",
  initialState: getInitState().products as CardProducts,

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