import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

export const configureStore = (preloadedState = {}) =>
  createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()));
export default configureStore;
