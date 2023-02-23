import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "../axios/index";
import { changeModalState } from "./slices/modalSlice";
import { setUser } from "./slices/userSlice";

// Регистрация
export const registration = createAsyncThunk("registration", async (values) => {
  return await axios.post("signup", values).then((response) => {
    return response.data;
  });
});
// Авторизация
export const authorization = createAsyncThunk(
  "authorization",
  async (values) => {
    const dispatch = useDispatch();
    return await axios.post("signin", values).then(({ data: res }) => {
      localStorage.setItem("token", res.token);
      dispatch(changeModalState(false));
      dispatch(setUser(res));
    });
  }
);
