import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "../../Redux/actions";
import style from "./Detalle.module.css";
import Loading from "../../Utils/loading2.gif";

function Detalle() {
  const { id } = useParams();
  const dispatch = useDispatch();

  let pokemon = useSelector((state) => state.pokemon);
  console.log(pokemon);
  console.log(pokemon);
  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch]);

  return (
    <div className={style.main}>
      {Object.keys(pokemon).length > 0 ? (
        <div className={style.contenedorMain}>
          <div className={style.contenedor}>
            <div className={style.contenedorLeft}>
              <p>{pokemon.name}</p>
              <img src={pokemon.image} alt="" />
            </div>

            <div className={style.contenedorRight}>
              <h2>Stats</h2>
              <div className={style.contenedorUp}>
                <div className={style.contenedorUpLeft}>
                  <p>Altura</p>
                  <p>{pokemon.height} Cm</p>
                  <p>Peso</p>
                  <p>{pokemon.weight} Gr</p>
                  <p>Vida</p>
                  <p>{pokemon.hp}</p>
                </div>

                <div className={style.contenedorUpRight}>
                  <p>Ataque</p>
                  <p>{pokemon.attack}</p>
                  <p>Defensa</p>
                  <p>{pokemon.defense}</p>
                  <p>Velocidad</p>
                  <p>{pokemon.speed}</p>
                </div>
              </div>

              <div className={style.containerDown}>
                <span>Tipo/s</span>
                <div className={style.contenedorTipo}>
                  {pokemon.types?.map((type) => {
                    return (
                      <p className={style.type} key={type.id}>
                        {type.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.containerLanding}>
          <img src={Loading} style={{ width: "25%" }} alt="loading" />
        </div>
      )}
    </div>
  );
}

export default Detalle;
