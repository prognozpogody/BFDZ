import { FinishValuesType } from "../../Components/formAuthorization/FormAuthorization.js";
import axios from "../../api/axios";
import { UserType } from "../../types/user.interface.js";
import { getInitState, InitStateStore } from "../initialState";
import { changeModalAuthorizationState } from "./modalSlice";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registration = createAsyncThunk(
  "registration",
  async (values: FinishValuesType, { dispatch }) => {
    try {
      const responce = await axios.post("signup", values);
      if (responce) {
        const responceReg = await axios.post("signin", {
          email: values.email,
          password: values.password,
        });
        localStorage.setItem("token", responceReg.data.token);
        dispatch(changeModalAuthorizationState(false));
        dispatch(setUser(responceReg.data));
      }
      return responce;
    } catch (error) {
      console.log(error);

      return error;
    }
  }
);

export const authorization = createAsyncThunk(
  "authorization",
  async (values: FinishValuesType, { dispatch }) => {
    const responce = await axios.post("signin", values);
    localStorage.setItem("token", responce.data.token);
    dispatch(changeModalAuthorizationState(false));
    dispatch(setUser(responce.data));
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: getInitState().user as UserType,
  reducers: {
    setUser(state, action) {
      state = action.payload.data;
      state.token = action.payload.token;
      return state;
    },
    logOutUser() {
      localStorage.removeItem("token");
      return getInitState();
    },
  },
});

export const { setUser, logOutUser } = userSlice.actions;
export const getUserSelector = (state: InitStateStore) => state.user;
export const getTokenSelector = (state: InitStateStore) => state.user.token;
export const getUserIdSelector = (state: InitStateStore) => state.user._id;
export const userReducer = userSlice.reducer;
