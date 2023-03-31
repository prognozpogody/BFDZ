import {
  addToCart,
  clearCart,
  dicrementProduct,
  removeToCart,
  incrementProduct,
  changeCheckProducts,
} from "./slices/cartSlice";
import {
  addDelFavoritsProduct,
  resetFavoritsInfo,
} from "./slices/favoritsSlice";
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
  addDelFavoritsProduct,
  resetFavoritsInfo,
  changeCheckProducts,
  incrementProduct,
  dicrementProduct,
  removeToCart,
  clearCart,
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
