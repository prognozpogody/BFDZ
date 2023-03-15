import { FinishValuesType } from "../../Components/formAuthorization/FormAuthorization.js";
import axios from "../../axios/index";
import { changeModalState } from "./modalSlice";
import { setUser } from "./userSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registration = createAsyncThunk(
  "registration",
  async (values: FinishValuesType, thunkApi) => {
    try {
      const responce = await axios.post("signup", values);
      return responce;
    } catch (error) {
      console.log(error);

      return thunkApi.rejectWithValue(error);
    }
  }
);

export const authorization = createAsyncThunk(
  "authorization",
  async (values: FinishValuesType, { dispatch }) => {
    const responce = await axios.post("signin", values);
    localStorage.setItem("token", responce.data.token);
    dispatch(changeModalState(false));
    dispatch(setUser(responce.data));
  }
);
