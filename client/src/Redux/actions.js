import {
  GET_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  CREATE_POKEMON,
  FILTER_TYPE,
  FILTER_ORIGIN,
  ORDER_NAME,
  FILTROS,
} from "../Redux/actionsTypes";
import axios from "axios";

export function getPokemons() {
  return async function (dispatch) {
    const pokemons = await axios.get(`http://localhost:3001/pokemons`);

    return dispatch({
      type: GET_POKEMONS,
      payload: pokemons.data,
    });
  };
}

export function getTypes() {
  return async function (dispatch) {
    const pokemons = await axios.get(`http://localhost:3001/types`);
    return dispatch({
      type: GET_TYPES,
      payload: pokemons.data,
    });
  };
}

export function getPokemon(id) {
  return async function (dispatch) {
    const pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
    return dispatch({
      type: GET_DETAIL,
      payload: pokemon.data,
    });
  };
}

export function createPokemon(estado) {
  return async function (dispatch) {
    var info = await axios.post(`http://localhost:3001/pokemons`, estado);
    console.log(info.data);
    return dispatch({
      type: CREATE_POKEMON,
      payload: info.data,
    });
  };
}

export function filterType(type) {
  return {
    type: FILTER_TYPE,
    payload: type,
  };
}

export function filterOrigin(origin) {
  return {
    type: FILTER_ORIGIN,
    payload: origin,
  };
}

export function orderName(payload) {
  return {
    type: ORDER_NAME,
    payload,
  };
}
