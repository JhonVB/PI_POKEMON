import {
  GET_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  CREATE_POKEMON,
  FILTER_TYPE,
  FILTER_ORIGIN,
  ORDER_NAME,
  ORDER_ATTACK,
} from "./actionsTypes";

const initialState = {
  pokemons: [],
  pokemon: {},
  types: [],
  order: "all",
  orderAttack: "all",
  type: "all",
  origin: "all",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      if (!action.payload.flag) {
        return {
          ...state,
          pokemons: action.payload.pokemons,
        };
      } else {
        if (action.payload.pokemons == 0) {
          alert("pokemon no encontrado");
        } else {
          return {
            ...state,
            pokemons: action.payload.pokemons,
          };
        }
      }

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
      return {
        ...state,
        type: action.payload,
      };

    case FILTER_ORIGIN:
      return {
        ...state,
        origin: action.payload,
      };

    case ORDER_NAME:
      let tidy = [];
      if (action.payload == "all") {
        let db = state.pokemons.filter((pokemon) => pokemon.order);
        let api = state.pokemons.filter(
          (pokemon) => typeof pokemon.id == "number"
        );
        tidy = api.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }
          return 0;
        });

        const info = [...tidy, ...db];

        return {
          ...state,
          order: action.payload,
          pokemons: info,
        };
      } else if (action.payload == "ascen") {
        tidy = state.pokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload == "descen") {
        tidy = state.pokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        order: action.payload,
        pokemons: tidy,
      };

    case ORDER_ATTACK:
      let tidyAttack = [];
      if (action.payload == "all") {
        let db = state.pokemons.filter((pokemon) => pokemon.order);
        let api = state.pokemons.filter(
          (pokemon) => typeof pokemon.id == "number"
        );
        tidyAttack = api.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }
          return 0;
        });

        const info = [...tidyAttack, ...db];

        return {
          ...state,
          order: action.payload,
          pokemons: info,
        };
      } else if (action.payload == "ascen") {
        tidyAttack = state.pokemons.sort(function (a, b) {
          if (a.attack > b.attack) {
            return 1;
          }
          if (b.attack > a.attack) {
            return -1;
          }
          return 0;
        });
      } else if (action.payload == "descen") {
        tidyAttack = state.pokemons.sort(function (a, b) {
          if (a.attack > b.attack) {
            return -1;
          }
          if (b.attack > a.attack) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        orderAttack: action.payload,
        pokemons: tidyAttack,
      };

    default:
      return {
        ...state,
      };
  }
}
