import { getInitState, InitStateStore } from "../initialState";
import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
  name: "filter",
  initialState: getInitState().filter,
  reducers: {
    changeSearchFilter(state, action) {
      state.search = action.payload;
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { changeSearchFilter, changeSort } = filterSlice.actions;
export const getSearchSelector = (state: InitStateStore) => state.filter.search;
export const filterReducer = filterSlice.reducer;