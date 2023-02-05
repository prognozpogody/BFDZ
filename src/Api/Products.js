import axios from "axios";
import { API_URL } from "../constants/constants";

axios.defaults.baseURL = API_URL;

export const ProductsApi = {
  // получение всех товаров
  async getProducts(userToken) {
    return await axios
      .get("products", {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      })
      .then((response) => {
        return response.data;
      });
  },
};

