import { CardType } from "../Redux/initialState";
import { store } from "../Redux/store";
import axios from "./axios";

export const getProducts = async () => {
  const responce = await axios.get("products", {
    headers: {
      Authorization: "Bearer " + store.getState().user.token,
    },
  });
  return responce.data;
};

export const getProductByID = async (id: string) => {
  const responce = await axios.get(`products/${id}`, {
    headers: {
      authorization: "Bearer " + store.getState().user.token,
    },
  });
  return responce.data;
};

export const getProductsInCart = async (productsInCart: CardType[]) => {
  const responce = Promise.all(
    productsInCart.map(async (cartProduct) => {
      const product = await getProductByID(cartProduct.id);
      return {
        ...product,
        isChecked: cartProduct.isCheck,
        count: cartProduct.count,
      };
    })
  );
  return responce;
};

export const getSearchProduct = async (values: string) => {
  return await axios.get(`products/search?query=${values}`, {
    headers: {
      authorization: "Bearer " + store.getState().user.token,
    },
  });
};
