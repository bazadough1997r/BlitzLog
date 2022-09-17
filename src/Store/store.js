import { createStore, applyMiddleware } from "redux";
import combineReducers from "./Reducers";
import thunk from "redux-thunk";

export const reduxStore = () => {
  const store = createStore(combineReducers, applyMiddleware(thunk));
  return {
    store,
  };
};
