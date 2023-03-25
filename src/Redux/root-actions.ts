import { addToCart } from "./slices/cartSlice";
import { changeSearchFilter } from "./slices/filterSlice";
import {
  changeModalAuthorizationState,
  changeModalCartState,
  changeModalCardQuickviewsState,
} from "./slices/modalSlice";
import { addProductQuickviews } from "./slices/poductsSlice";
import {
  setUser,
  logOutUser,
  authorization,
  registration,
} from "./slices/userSlice";

export const rootActions = {
  addProductQuickviews,
  setUser,
  changeModalAuthorizationState,
  changeModalCartState,
  changeModalCardQuickviewsState,
  logOutUser,
  changeSearchFilter,
  addToCart,
  authorization,
  registration,
};
