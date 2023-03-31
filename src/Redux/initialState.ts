import { Modal } from "../types/modal.interface";
import { CardProducts, CardType, favorits } from "../types/products.interface";
import { UserType } from "../types/user.interface";
import { REDUX_SINK } from "../utils/constants";

export interface InitStateStore {
  modal: Modal;
  user: UserType;
  filter: {
    search: string;
  };
  cart: CardType[];
  score: number;
  products: CardProducts;
  favorits: favorits[];
}

export const initState: InitStateStore = {
  modal: {
    authorizationOpen: false,
    cartOpen: false,
    cardQuickviews: false,
  },
  user: {
    about: "",
    email: "",
    token: "",
    _id: "",
    name: "",
    avatar: "",
    group: "",
  },
  filter: {
    search: "",
  },
  cart: [],
  score: 2,
  products: {
    name: "",
    _id: "",
    description: "",
    pictures: "",
    price: 0,
    author: {},
    available: false,
    created_at: "",
    discount: 0,
    isPublished: false,
    likes: [],
    reviews: {},
    stock: 0,
    tags: [""],
    updated_at: "",
    wight: "",
    __v: 0,
    isCheck: true,
    count: 0,
    id: "",
  },
  favorits: [],
};

export const getInitState = () => {
  const dataLS = window.localStorage.getItem(REDUX_SINK);
  return dataLS ? JSON.parse(dataLS) : initState;
};
