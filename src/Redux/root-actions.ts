import { addToCart } from "./slices/cartSlice";
import { changeSearchFilter } from "./slices/filterSlice";
import { changeModalAuthorizationState, changeModalCartState } from "./slices/modalSlice";
import { setUser, logOutUser, authorization, registration } from "./slices/userSlice";


export const rootActions = {
  setUser,
  changeModalAuthorizationState,
  changeModalCartState,
  logOutUser,
  changeSearchFilter,
  addToCart,
  authorization,
  registration,
};