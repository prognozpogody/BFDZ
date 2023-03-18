import { addToCart } from "./slices/cartSlice";
import { changeSearchFilter } from "./slices/filterSlice";
import { changeModalState } from "./slices/modalSlice";
import {
  setUser,
  logOutUser,
  authorization,
  registration,
} from "./slices/userSlice";

export const rootActions = {
  setUser,
  changeModalState,
  logOutUser,
  changeSearchFilter,
  addToCart,
  authorization,
  registration,
};
