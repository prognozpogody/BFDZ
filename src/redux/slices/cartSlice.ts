import { CardProducts, CardType } from "../../types/products.interface";
import { getInitState, InitStateStore } from "../initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: getInitState().cart as CardType[],
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: string }>) => {
      const productInCart = state.find(
        (product) => product.id === action.payload.id
      );
      if (productInCart) {
        productInCart.count++;
        return state;
      }

      state.push({ id: action.payload.id, isCheck: true, count: 1 });
    },

    removeToCart(state, action: PayloadAction<CardProducts>) {
      return state.filter((product) => product.id !== action.payload._id);
    },

    clearCart() {
      return getInitState().cart;
    },

    changeCheckProducts(state, action) {
      if (action.payload in state) {
        state[action.payload].isCheck = !state[action.payload].isCheck;
      }

      return state;
    },

    incrementProduct: (state, action: PayloadAction<string>) => {
      const productInCart = state.find(
        (product) => product.id === action.payload
      );

      if (productInCart) {
        productInCart.count++;
        return state;
      }

      return state;
    },

    dicrementProduct: (state, action: PayloadAction<string>) => {
      const productInCart = state.find(
        (product) => product.id === action.payload
      );

      if (productInCart) {
        if (productInCart.count === 1) {
          return state.filter((product) => product.id !== action.payload);
        }
        productInCart.count--;
        return state;
      }

      return state;
    },
  },
});

export const {
  addToCart,
  removeToCart,
  clearCart,
  changeCheckProducts,
  incrementProduct,
  dicrementProduct,
} = cartSlice.actions;
export const getCartSelector = (state: InitStateStore) => state.cart;
export const getCartSum = (state: InitStateStore) => state.cart.length;
export const cartReducer = cartSlice.reducer;
