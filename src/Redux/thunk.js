import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios/index";
import { store } from "./Store";

const token = store.getState().user.token;
const id = store.getState().user.id;

export const getProducts = createAsyncThunk("getProducts", async () => {
  return await axios
    .get("products", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
});

export const getProductByID = createAsyncThunk("getProductByID", async () => {
  console.log(token, id);
  return await axios.get(`products/${id}`, {
    headers: {
      authorization: "Bearer " + token,
    },
  });
});

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
