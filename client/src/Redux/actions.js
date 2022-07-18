import { GET_POKEMONS, GET_TYPES } from "../Redux/actionsTypes";
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
