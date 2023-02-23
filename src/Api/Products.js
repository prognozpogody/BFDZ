import axios from "../axios/index";
import { store } from "../Redux/store";

const token = store.getState().user.token;

// получение всех товаров
export const getProducts = async () => {
  return await axios
    .get("products", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getProductByID = async (id) => {
  return await axios.get(`products/${id}`, {
    headers: {
      authorization: "Bearer " + token,
    },
  });
};
