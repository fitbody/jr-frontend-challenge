
import { createStore, combineReducers } from "redux";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { loadFromLocalStorage, saveToLocalStorage} from "../utils/persistData"

const reducer = combineReducers({
  favorites: favoriteReducer,
});

const store = createStore(
  reducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
