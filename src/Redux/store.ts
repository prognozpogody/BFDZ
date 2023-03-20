import { REDUX_SINK } from "../utils/constants";
import { getInitState } from "./initialState";
import { cartReducer } from "./slices/cartSlice";
import { filterReducer } from "./slices/filterSlice";
import { modalOpenReducer } from "./slices/modalSlice";
import { userReducer } from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    modal: modalOpenReducer,
    cart: cartReducer,
  },
  preloadedState: getInitState(),
});

store.subscribe(() => {
  const currentState = store.getState();
  window.localStorage.setItem(REDUX_SINK, JSON.stringify(currentState));
});