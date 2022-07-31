import {
  GET_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  CREATE_POKEMON,
  FILTER_TYPE,
  FILTER_ORIGIN,
} from "./actionsTypes";

const initialState = {
  pokemons: [],
  staticPokemons: [],
  pokemon: {},
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        staticPokemons: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        pokemon: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };

    case FILTER_TYPE:
      const allPokemons = state.staticPokemons;
      console.log("static", allPokemons);
      const filterType =
        action.payload === "all"
          ? allPokemons
          : allPokemons.filter((pokemon) =>
              pokemon.types.find((type) => type.name == action.payload)
            );
      return {
        ...state,
        pokemons: filterType,
      };

    default:
      return {
        ...state,
      };
  }
}
