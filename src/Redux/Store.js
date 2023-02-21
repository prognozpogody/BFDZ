import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initialState";
import { REDUX_TOKEN } from "../constants/constants";
import { filterReducer } from "./slices/filterSlice";
import { userReducer } from "./slices/userSlice";
import { modalOpenReducer } from "./slices/modalSlice";
import { productReducer } from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    modalOpen: modalOpenReducer,
    products: productReducer,
  },
  preloadedState: getInitState(),
});

store.subscribe(() => {
  const currentState = store.getState();

  window.localStorage.setItem(REDUX_TOKEN, JSON.stringify(currentState));
});
