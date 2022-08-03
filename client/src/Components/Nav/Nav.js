import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  filterType,
  filterOrigin,
  orderName,
  orderAttack,
  getPokemons,
} from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import style from "./Nav.module.css";
import { addAbortSignal } from "stream";

function Nav() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const state = useSelector((state) => state.types);

  console.log(name);
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleType = (e) => {
    dispatch(filterType(e.target.value));
  };

  const handleOrigin = (e) => {
    dispatch(filterOrigin(e.target.value));
  };

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(orderName(e.target.value));
  };

  const handleOrderAttack = (e) => {
    dispatch(orderAttack(e.target.value));
  };
  return (
    <div className={style.contenedor}>
      <div>
        <input
          type="text"
          onChange={handleName}
          placeholder="Nombre de pokemon"
        />

        <button className={style.raise}>Buscar</button>

        <Link to="/formulario">
          <button className={style.raise}>Crear Pokémon</button>
        </Link>
      </div>

      <div>
        <span>Tipo</span>
        <select onChange={handleType}>
          <option value="all">all</option>
          {state?.map((type) => (
            <option id={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        <span>Origen</span>
        <select onChange={handleOrigin}>
          <option value="all">All</option>
          <option value="db">DB</option>
          <option value="api">API</option>
        </select>
        <span>Alfabéticamente</span>
        <select onChange={handleOrder}>
          <option value="all">All</option>
          <option value="ascen">Ascendente</option>
          <option value="descen">Descendente</option>
        </select>
        <span>Ataque</span>
        <select onChange={handleOrderAttack}>
          <option value="all">All</option>
          <option value="ascen">Ascendente</option>
          <option value="descen">Descendente</option>
        </select>
      </div>
    </div>
  );
}

export default Nav;
