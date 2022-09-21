import combineReducers from "./Reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

export const reduxStore = () => {

  const store = configureStore({
    middleware: [thunk],
    reducer: combineReducers,
  });
  
  return {
    store,
  };
};
