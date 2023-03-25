import { CardProducts } from "../../types/products.interface";
import { CardType, getInitState, InitStateStore } from "../initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: getInitState().cart,

  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find(
        (item: any) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.count++;
        return state;
      }

      state.push({ id: action.payload.id, isAdded: true, count: 1 });
    },
    removeToCart(state, action: PayloadAction<CardProducts>) {
      return state.filter(
        (products: { id: any }) => products.id !== action.payload._id
      );
    },

    clearCart() {
      return [];
    },

    changeIsChecked(state: CardType[], action) {
      if (action.payload in state) {
        state[action.payload].isAdded = !state[action.payload].isAdded;
      }
    },
  },
});

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;
export const getCartSelector = (state: InitStateStore) => state.cart;
export const getCartSum = (state: InitStateStore) => state.cart.length;
export const cartReducer = cartSlice.reducer;
