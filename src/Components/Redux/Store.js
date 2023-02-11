import { applyMiddleware, createStore } from "redux";
import { myInitialState } from "./InitialState";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

export const store = createStore(mainReducer, myInitialState, composeWithDevTools(applyMiddleware()))