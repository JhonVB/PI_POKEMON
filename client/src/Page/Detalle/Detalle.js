import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "../../Redux/actions";
import style from "./Detalle.module.css";

function Detalle() {
  const { id } = useParams();
  const dispatch = useDispatch();

  let pokemon = useSelector((state) => state.pokemon);

  console.log(pokemon);
  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch]);

  return (
    <div className={style.main}>
      <Link to="/home">
        <button>Al home</button>
      </Link>
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
