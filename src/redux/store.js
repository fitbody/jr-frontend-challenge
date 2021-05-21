
import { createStore, combineReducers } from "redux";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { loadFromLocalStorage, saveToLocalStorage} from "../utils/persistData"

const reducer = combineReducers({
  favorites: favoriteReducer,
});

const store = createStore(
  reducer,
  loadFromLocalStorage()
);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
