import { ADD_FAVORITES, DELETE_FAVORITES } from "./types";

export const addFavorite = ({
  id,
  name,
  image,
  status,
  location,
  origin,
  favorite,
}) => ({
  type: ADD_FAVORITES,
  payload: { id, name, image, status, location, origin, favorite },
});

export const deleteFavorite = (id) => ({
  type: DELETE_FAVORITES,
  payload: {
    id,
  },
});
