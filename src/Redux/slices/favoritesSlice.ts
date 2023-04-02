import { favorites } from "../../types/products.interface";
import { getInitState, InitStateStore } from "../initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getInitState().favorites as favorites[],
  reducers: {
    addDelFavoritesProduct(state, action: PayloadAction<{ id: string }>) {
      let currentProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!currentProduct) {
        state.push(action.payload);
      } else {
        return state.filter((product) => product.id !== action.payload.id);
      }
    },
    resetFavoritesInfo() {
      return getInitState();
    },
  },
});

export const { addDelFavoritesProduct, resetFavoritesInfo } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const getFavoritesSum = (state: InitStateStore) => state.favorites.length;
export const getFavoritesSelector = (state: InitStateStore) => state.favorites;