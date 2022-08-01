import {
  GET_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  CREATE_POKEMON,
  FILTER_TYPE,
  FILTER_ORIGIN,
  ORDER_NAME,
  FILTROS,
} from "./actionsTypes";

const initialState = {
  pokemons: [],
  staticPokemons: [],
  pokemon: {},
  types: [],
  order: "",
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
      let allPokemons = state.staticPokemons;

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

    case FILTER_ORIGIN:
      const allpokemons = state.staticPokemons;

      const filterOrigin =
        action.payload === "db"
          ? allpokemons.filter((el) => {
              if (typeof el.id === "string") {
                return el;
              }
            })
          : allpokemons.filter((el) => {
              if (typeof el.id === "number") {
                return el;
              }
            });

      return {
        ...state,
        pokemons: action.payload == "all" ? state.staticPokemons : filterOrigin,
      };

    case ORDER_NAME:
      let tidy =
        action.payload === "ascen"
          ? state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        order: action.payload,
        pokemons: tidy,
      };

    default:
      return {
        ...state,
      };
  }
}
