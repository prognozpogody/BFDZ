import { CardProducts } from "../types/products.interface";
import { REDUX_SINK } from "../utils/constants";

export interface CardType {
  isCheck: boolean;
  count: number;
  id: string;
}

interface UserType {
  about: string;
  email: string;
  token: string;
  _id: string;
  name: string;
  avatar: string;
  group: string;
}

export interface InitStateStore {
  modal: {
    AuthorizationOpen: boolean;
    CartOpen: boolean;
    CardQuickviews: boolean;
  };
  user: UserType;
  filter: {
    search: string;
  };
  cart: CardType[];
  score: number;
  products: CardProducts;
}

export const initState: InitStateStore = {
  modal: {
    AuthorizationOpen: false,
    CartOpen: false,
    CardQuickviews: false,
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
};

export const getInitState = () => {
  const dataLS = window.localStorage.getItem(REDUX_SINK);
  return dataLS ? JSON.parse(dataLS) : initState;
};
