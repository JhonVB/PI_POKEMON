import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon, getPokemons, getTypes } from "../../Redux/actions";
// import { getCharacter } from "../../redux/actions";

function Detalle() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemon);
  //   const pokemonDetail = pokemons.find((pokemon) => pokemon.id == id);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch]);

  //   console.log(pokemonDetail);
  return (
    <div>
      {pokemon ? (
        <div>
          <p>{pokemon.name}</p>
          <img src={pokemon.image} alt="" />
          <p>HEIGHT:</p>
          <p>{pokemon.height} Cm</p>
          <p>weight:</p>
          <p>{pokemon.weight} gramos</p>
          <p>hp:</p>
          <p>{pokemon.hp}</p>
          <p>attack:</p>
          <p>{pokemon.attack}</p>
          <p>defense:</p>
          <p>{pokemon.defense}</p>
          <p>speed:</p>
          <p>{pokemon.speed}</p>

          <p>TYPES:</p>
          {pokemon.types?.map((type) => {
            return (
              <p className="type" key={type.id}>
                {type.name}
              </p>
            );
          })}
        </div>
      ) : (
        <h1>Cargando</h1>
      )}
    </div>
  );
}

export default Detalle;
