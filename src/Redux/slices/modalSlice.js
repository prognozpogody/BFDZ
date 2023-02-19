import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initialState";

const modalSlice = createSlice({
  name: "modalOpen",
  initialState: initState.modalOpen,
  reducers: {
    changeModalState(state, action) {
      console.log(state);
      console.log(action);
      state = action.payload;
      console.log(state);
      console.log(action);
      return state;
    },
  },
});

export const { changeModalState } = modalSlice.actions;
export const getModalSelector = (state) => state.modalOpen;
export const modalOpenReducer = modalSlice.reducer;
