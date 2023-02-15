import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initState";
import { filterReducer } from "./slices/filterSlice";
import { userReducer } from "./slices/userSlice";
import { REDUX_TOKEN } from "../constants/constants";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
  },
  preloadedState: getInitState(),
});

store.subscribe(() => {
  const currentState = store.getState();

  window.localStorage.setItem(REDUX_TOKEN, JSON.stringify(currentState));
});
