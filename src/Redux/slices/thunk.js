import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/index";
import { changeModalState } from "./modalSlice";
import { setUser } from "./userSlice";

export const registration = createAsyncThunk(
  "registration",
  async (values) => await axios.post("signup", values)
);

export const authorization = createAsyncThunk(
  "authorization",
  async (values, { dispatch }) => {
    const responce = await axios.post("signin", values);
    localStorage.setItem("token", responce.data.token);
    console.log(responce.data);
    dispatch(changeModalState(false));
    dispatch(setUser(responce.data));
  }
);
