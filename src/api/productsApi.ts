import axios from "./axios";

export const getProducts = async () => {
  return await axios
    .get("products", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getProductByID = async (id: string) => {
  const responce = await axios.get(`products/${id}`, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return responce.data;
};

export const getProductsByIds = async (ids: string[]) => {
  const responce = Promise.all(ids.map((id) => getProductByID(id)));
  return responce;
};

export const getSearchProduct = async (values: string) => {
  return await axios.get(`products/search?query=${values}`, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
