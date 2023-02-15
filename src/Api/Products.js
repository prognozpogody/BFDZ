import axios from "axios";
import { API_URL } from "../constants/constants";

axios.defaults.baseURL = API_URL;

export const ProductsApi = {
  // получение всех товаров
  async getProducts() {
    return await axios
      .get("products", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        return response.data;
      });
  },

  async getProductByID(id, token) {
    return await axios.get(`products/${id}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
  },
};
