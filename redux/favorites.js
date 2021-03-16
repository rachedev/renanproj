import * as ActionTypes from "./ActionTypes";

export const favorites = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE:
      if (state.includes(action.payload)) {
        return state;
      }
      return state.concat(action.payload);

    case ActionTypes.DELETE_FAVORITE:
      return state.filter((favorite) => favorite !== action.payload);

    default:
      return state;
  }
};

// made a mistake in committing to a previous commit title; this file when made should have been under the commit "Redux Adding Favorites"
