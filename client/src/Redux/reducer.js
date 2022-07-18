import { GET_POKEMONS, GET_TYPES } from "./actionsTypes";

const initialState = {
  pokemons: [],
  pokemon: {},
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
