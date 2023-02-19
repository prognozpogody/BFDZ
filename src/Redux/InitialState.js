import { REDUX_TOKEN } from "../constants/constants";

export const initState = {
  modalOpen: false,
  user: { group: "", name: "", email: "", token: "Null" },
  filter: {
    search: "",
  },
};

export const getInitState = () => {
  const dataLS = window.localStorage.getItem(REDUX_TOKEN);

  return dataLS ? JSON.parse(dataLS) : initState;
};
