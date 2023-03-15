import { initState, InitStateStore } from "../initialState";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: initState.user,
  reducers: {
    setUser(state, action) {
      state = action.payload.data;
      state.token = action.payload.token;
      return state;
    },
    logOutUser() {
      localStorage.removeItem("token");
      return initState.user;
    },
  },
});

export const { setUser, logOutUser } = userSlice.actions;
export const getUserSelector = (state: InitStateStore) => state.user;
export const getTokenSelector = (state: InitStateStore) => state.user.token;
export const getUserIdSelector = (state: InitStateStore) => state.user._id;
export const userReducer = userSlice.reducer;
