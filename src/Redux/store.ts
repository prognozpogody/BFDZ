import { REDUX_SINK } from "../utils/constants";
import { getInitState } from "./initialState";
import { cartReducer } from "./slices/cartSlice";
import { filterReducer } from "./slices/filterSlice";
import { modalOpenReducer } from "./slices/modalSlice";
import { productsReducer } from "./slices/poductsSlice";
import { userReducer } from "./slices/userSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
  modal: modalOpenReducer,
  cart: cartReducer,
  products: productsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState: getInitState(),
});

store.subscribe(() => {
  window.localStorage.setItem(REDUX_SINK, JSON.stringify(store.getState()));
});
