import {
  GET_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  CREATE_POKEMON,
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
    //  console.log(info);
    return dispatch({
      type: CREATE_POKEMON,
      payload: info.data,
    });
  };
}
