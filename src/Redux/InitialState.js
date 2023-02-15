import { REDUX_TOKEN } from "../constants/constants";

export const initState = {
  token: "Null",
  modalOpen: false,
  user: { group: "", email: "", token: "" },
  cart: {
    product_id: {
      count: "",
      isChecked: false,
    },
  },
  filter: {
    search: "",
  },
};

export const getInitState = () => {
  const dataLS = window.localStorage.getItem(REDUX_TOKEN);

  return dataLS ? JSON.parse(dataLS) : initState;
};
