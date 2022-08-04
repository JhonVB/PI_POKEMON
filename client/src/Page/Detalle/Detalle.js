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

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch]);

  return (
    <div className={style.main}>
      {Object.keys(pokemon).length > 0 ? (
        <div className={style.contenedorMain}>
          <Link to="/home">
            <button className={style.raise}>Home</button>
          </Link>
          <div className={style.contenedor}>
            <div className={style.contenedorLeft}>
              <div className={style.contenedorTitulo}>
                <p className={style.titulo}>{pokemon.name.toUpperCase()}</p>
              </div>
              <img src={pokemon.image} alt="" />
            </div>

            <div className={style.contenedorRight}>
              <p className={style.titulo}>Estadisticas</p>
              <div className={style.contenedorUp}>
                <div className={style.contenedorUpLeft}>
                  <p className={style.subtitulo}>Altura</p>
                  <p>{pokemon.height} Cm</p>
                  <p className={style.subtitulo}>Peso</p>
                  <p>{pokemon.weight} Gr</p>
                  <p className={style.subtitulo}>Vida</p>
                  <p>{pokemon.hp}</p>
                </div>

                <div className={style.contenedorUpRight}>
                  <p className={style.subtitulo}>Ataque</p>
                  <p>{pokemon.attack}</p>
                  <p className={style.subtitulo}>Defensa</p>
                  <p>{pokemon.defense}</p>
                  <p className={style.subtitulo}>Velocidad</p>
                  <p>{pokemon.speed}</p>
                </div>
              </div>

              <div className={style.containerDown}>
                <p className={style.subtitulo}>Tipo/s</p>
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
