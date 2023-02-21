import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initialState";

const userSlice = createSlice({
  name: "user",
  initialState: initState.user,
  reducers: {
    setUser(state, action) {
      state.about = action.payload.payload.data.about;
      state.avatar = action.payload.payload.data.avatar;
      state.email = action.payload.payload.data.email;
      state.group = action.payload.payload.data.group;
      state.name = action.payload.payload.data.name;
      state.__v = action.payload.payload.data.__v;
      state._id = action.payload.payload.data._id;
      state.token = action.payload.payload.token;
      return state;
    },
  },
  deleteUser() {
    return initState.user;
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export const getUserSelector = (state) => state.user;
export const getTokenSelector = (state) => state.user.token;
export const userReducer = userSlice.reducer;
