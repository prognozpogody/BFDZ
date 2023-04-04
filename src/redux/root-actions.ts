import {
  addToCart,
  clearCart,
  dicrementProduct,
  removeToCart,
  incrementProduct,
  changeCheckProducts,

} from "./slices/cartSlice";
import {
  addDelFavoritesProduct,
  resetFavoritesInfo,
} from "./slices/favoritesSlice";
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

  addDelFavoritesProduct,
  resetFavoritesInfo,
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
