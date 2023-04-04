import { REDUX_SINK } from "../utils/constants";
import { getInitState } from "./initialState";
import { cartReducer } from "./slices/cartSlice";
import { favoritesReducer } from "./slices/favoritesSlice";
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
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitState(),
});

store.subscribe(() => {
  window.localStorage.setItem(REDUX_SINK, JSON.stringify(store.getState()));
});
