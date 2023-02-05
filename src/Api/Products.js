import axios from "axios";

const API_URL = "https://api.react-learning.ru/";
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

