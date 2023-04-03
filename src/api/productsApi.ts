import { store } from "../redux/store";
import { CardType } from "../types/products.interface";
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

export const getAllProductByID = async (ids: string[]) => {
  const responce = Promise.all(ids.map((id) => getProductByID(id)));
  return responce;
};

export const getProductsInCart = async (productsInCart: CardType[]) => {
  const responce = Promise.all(
    productsInCart.map(async (cartProduct) => {
      return await getProductByID(cartProduct.id);
    })
  );
  return responce;
};

export const getSearchProduct = async (product: string) => {
  return await axios.get(`products/search?query=${product}`, {
    headers: {
      authorization: "Bearer " + store.getState().user.token,
    },
  });
};

export const setLike = async (id: string) => {
  await axios.put(`products/likes/${id}`, "", {
    headers: {
      Authorization: `Bearer ${store.getState().user.token}`,
    },
  });
};

export const deleteLike = async (id: string) => {
  await axios.delete(`products/likes/${id}`, {
    headers: {
      Authorization: `Bearer ${store.getState().user.token}`,
    },
  });
};
