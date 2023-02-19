import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initialState";
import { filterReducer } from "./slices/filterSlice";
import { userReducer } from "./slices/userSlice";
import { REDUX_TOKEN } from "../constants/constants";
import { modalOpenReducer } from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    modalOpen: modalOpenReducer,
  },
  preloadedState: getInitState(),
});

store.subscribe(() => {
  const currentState = store.getState();

  window.localStorage.setItem(REDUX_TOKEN, JSON.stringify(currentState));
});
