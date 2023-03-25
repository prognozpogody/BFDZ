import { CardType, getInitState, InitStateStore } from "../initialState";
import { createSlice, current } from "@reduxjs/toolkit";


// const cartAdapter = createEntityAdapter({
//   selectId: (cart: any) => cart.id,
//   sortComparer: (a, b) => a.title.localeCompare(b.title),
// });

export const cartSlice = createSlice({
  name: "cart",
  initialState: getInitState().cart,

  reducers: {
    addToCart: (state: CardType[], action) => {
      // if (current(state).find((item) => item.id === action.payload.id)) {
      //   state.push(
      //     current(state).find((item) => item.id === action.payload.id).count++
      //   );
      //   return state;
      // }
      const itemInCart: any = current(state).filter(
        (el) => el.id === action.payload.id
      );

      if (itemInCart.length !== 0) {
        console.log(itemInCart);
        console.log(itemInCart.id);
        itemInCart[0].count++;
        console.log("++");
        return state;
      }
      console.log("добавка");
      state.push({ id: action.payload.id, isAdded: true, count: 1 });
      return state;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const getCartSelector = (state: InitStateStore) => {
  return state.cart;
};
export const getCartSum = (state: InitStateStore) => {
  return state.cart.length;
};
export const cartReducer = cartSlice.reducer;
