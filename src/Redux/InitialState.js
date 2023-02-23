import { REDUX_SINK } from "../utils/constants";

export const initState = {
  modalOpen: false,
  user: {},
  filter: {
    search: "",
  },
  cart: [],
};

export const getInitState = () => {
  const dataLS = window.localStorage.getItem(REDUX_SINK);
  return dataLS ? JSON.parse(dataLS) : initState;
};
