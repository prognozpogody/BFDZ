import { REDUX_SINK } from "../utils/constants";

interface CardCardType {
  id?: string;
}

interface UserType {
  about?: string;
  email?: string;
  token?: string;
  _id?: string;
  name?: string;
  avatar?: string;
}

export interface InitStateStore {
  modalOpen: boolean;
  user: UserType;
  filter: {
    search: string;
  };
  cart: CardCardType[];
  score: number;
}

export const initState: InitStateStore = {
  modalOpen: false,
  user: {},
  filter: {
    search: " ",
  },
  cart: [],
  score: 2,
};

export const getInitState = () => {
  const dataLS = window.localStorage.getItem(REDUX_SINK);
  return dataLS ? JSON.parse(dataLS) : initState;
};
