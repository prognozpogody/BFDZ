import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initState } from "../initialState";
import axios from "axios";
import { API_URL } from "../../constants/constants";

axios.defaults.baseURL = API_URL;

// Регистрация
export const registration = createAsyncThunk("registration", async (values) => {
  return await axios.post("signup", values).then((response) => {
    localStorage.setItem("token", response.data.token);
    return response.data;
  });
});
// Авторизация
export const authorization = createAsyncThunk(
  "authorization",
  async (values) => {
    return await axios.post("signin", values).then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    });
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initState.user,
  reducers: {
    setUser: {
      reducer(state, action) {
        if (state.email !== action.payload.email) return action.payload;
      },
      prepare(id, token, email) {
        return {
          payload: {
            id,
            token,
            email,
          },
        };
      },
    },
    deleteUser() {
      return initState.user;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export const getUserSelector = (state) => state.user;
export const getTokenSelector = (state) => state.user.token;
export const userReducer = userSlice.reducer;
