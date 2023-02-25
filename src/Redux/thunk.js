import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios/index";

export const registration = createAsyncThunk("registration", async (values) => {
  return await axios.post("signup", values).then((response) => {
    return response.data;
  });
});

export const authorization = createAsyncThunk(
  "authorization",
  async (values) => {
    return await axios.post("signin", values).then(({ data: res }) => {
      localStorage.setItem("token", res.token);
      return res;
    });
  }
);
