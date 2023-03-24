import { initState, InitStateStore } from "../initialState";
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalOpen",
  initialState: initState.modal,
  reducers: {
    changeModalAuthorizationState(state, action) {
      state.AuthorizationOpen = action.payload;
      return state;
    },
    changeModalCartState(state, action) {
      state.CartOpen = action.payload;
      return state;
    },
  },
});

export const modalOpenReducer = modalSlice.reducer;
export const { changeModalAuthorizationState, changeModalCartState } =
  modalSlice.actions;
export const getModalSelectorAuthorization = (state: InitStateStore) =>
  state.modal.AuthorizationOpen;
export const getModalSelectorCart = (state: InitStateStore) =>
  state.modal.CartOpen;
