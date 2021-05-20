import { types } from "../actions/types";

export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_FAVORITES:
      return [...state, action.payload];
    case types.DELETE_FAVORITES:
      return state.filter((favorite) => favorite.id !== action.payload.id);
    default:
      return state;
  }

}


