import { Modal } from "../../types/modal.interface";
import { getInitState, InitStateStore } from "../initialState";
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalOpen",
  initialState: getInitState() as Modal,
  reducers: {
    changeModalAuthorizationState(state, action) {
      state.authorizationOpen = action.payload;
      return state;
    },
    changeModalCartState(state, action) {
      state.cartOpen = action.payload;
      return state;
    },
    changeModalCardQuickviewsState(state, action) {
      state.cardQuickviews = action.payload;
      return state;
    },
  },
});

export const modalOpenReducer = modalSlice.reducer;
export const {
  changeModalAuthorizationState,
  changeModalCartState,
  changeModalCardQuickviewsState,
} = modalSlice.actions;
export const getModalSelectorAuthorization = (state: InitStateStore) =>
  state.modal.authorizationOpen;
export const getModalSelectorCart = (state: InitStateStore) =>
  state.modal.cartOpen;
export const getModalSelectorCardQuickviews = (state: InitStateStore) =>
  state.modal.cardQuickviews;
