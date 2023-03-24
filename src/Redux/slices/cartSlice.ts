import { CardCardType, initState, InitStateStore } from "../initialState";
import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: initState.cart,
  reducers: {
    addToCart(state, action) {
      const itemInCart = current(state).find(
        (item) => item.id === action.payload.id
      );
      const itemInCart2 = { ...itemInCart };
      console.log(itemInCart);
      console.log(itemInCart2);
      if (itemInCart2.count) {
        itemInCart2.count++;
        console.log("++");
        console.log(itemInCart2);
      

        return state;
      }
      console.log("добавка");

      state.push({ id: action.payload.id, count: 1 });

      return state;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const getCartSelector = (state: InitStateStore) => {
  return state.cart;
};
export const cartReducer = cartSlice.reducer;
