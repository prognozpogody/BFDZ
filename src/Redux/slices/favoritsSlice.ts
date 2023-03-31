import { CardProducts, favorits } from "../../types/products.interface";
import { getInitState, InitStateStore } from "../initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const favoritsSlice = createSlice({
  name: "favorits",
  initialState: getInitState().favorits as favorits[],
  reducers: {
    addDelFavoritsProduct(state, action: PayloadAction<{ id: string }>) {
      let currentProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!currentProduct) {
        state.push(action.payload);
      } else {
        return state.filter((product) => product.id !== action.payload.id);
      }
    },
    resetFavoritsInfo() {
      return getInitState();
    },
  },
});

export const { addDelFavoritsProduct, resetFavoritsInfo } =
  favoritsSlice.actions;
export const favoriteReducer = favoritsSlice.reducer;
export const getFavoritsSum = (state: InitStateStore) => state.favorits.length;
export const getFavoriteSelector = (state: InitStateStore) => state.favorits;
