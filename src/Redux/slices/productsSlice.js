import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initialState";

const productsSlice = createSlice({
  name: "products",
  initialState: initState.products,
  reducers: {
    setProducts(state, action) {
      console.log(state);
      console.log(action);
      state = action.payload.products;
      return state;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const getAllProductsSelector = (state) => state.products;
export const productReducer = productsSlice.reducer;
