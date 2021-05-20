// import { createStore } from "redux";
// import rootReducer from "./reducers";

// export const store = createStore(rootReducer);
import { createStore, combineReducers } from "redux";
import { favoriteReducer } from "./reducers/favoriteReducer";

const reducer = combineReducers({
  favorites: favoriteReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
