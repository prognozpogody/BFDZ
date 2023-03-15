import { initState, InitStateStore } from "../initialState";
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalOpen",
  initialState: initState.modalOpen,
  reducers: {
    changeModalState(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const modalOpenReducer = modalSlice.reducer;
export const { changeModalState } = modalSlice.actions;
export const getModalSelector = (state: InitStateStore) => state.modalOpen;
