import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { getCharacter } from "../../redux/actions";

function Detalle() {
  const { id } = useParams();
  const pokemons = useSelector((state) => state.pokemons);
  const pokemonDetail = pokemons.find((pokemon) => pokemon.id == id);
  console.log(pokemonDetail);
  return (
    <div>
      <p>{pokemonDetail.name}</p>
      <img src={pokemonDetail.image} alt="" />
      <p>HEIGHT:</p>
      <p>{pokemonDetail.height}</p>
      <p>weight:</p>
      <p>{pokemonDetail.weight}</p>
      <p>hp:</p>
      <p>{pokemonDetail.hp}</p>
      <p>attack:</p>
      <p>{pokemonDetail.attack}</p>
      <p>defense:</p>
      <p>{pokemonDetail.defense}</p>
      <p>speed:</p>
      <p>{pokemonDetail.speed}</p>

      <p>TYPES:</p>
      {pokemonDetail.types?.map((type) => {
        return (
          <p className="type" key={type.id}>
            {type.name}
          </p>
        );
      })}
    </div>
  );
}

export default Detalle;
