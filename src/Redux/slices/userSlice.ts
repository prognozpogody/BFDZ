import { FinishValuesType } from "../../Components/formAuthorization/FormAuthorization.js";
import axios from "../../axios/index";
import { initState, InitStateStore } from "../initialState";
import { changeModalState } from "./modalSlice";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registration = createAsyncThunk(
  "registration",
  async (values: FinishValuesType, thunkApi) => {
    try {
      const responce = await axios.post("signup", values);
      if (responce) {
        await authorization({
          email: values.email,
          password: values.password,
        });
      }
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
