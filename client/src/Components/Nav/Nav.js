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

function Nav() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const state = useSelector((state) => state.types);

  const submit = (e) => {
    if (name.length > 0) dispatch(getPokemons(name));
    else alert("Agrega un nombre para buscarlo");
  };
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
          className={style.input}
          placeholder="Nombre de pokemon"
          onKeyDown={(e) => (e.key == "Enter" ? submit(e) : null)}
        />

        <button className={style.raise} onClick={submit}>
          Buscar
        </button>

        <button className={style.raise} onClick={() => dispatch(getPokemons())}>
          Cargar Pokémons
        </button>

        <Link to="/formulario">
          <button className={style.raise}>Crear Pokémon</button>
        </Link>
      </div>

      <div>
        <span>Tipo</span>
        <select className={style.select} onChange={handleType}>
          <option value="all">All</option>
          {state?.map((type) => (
            <option id={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        <span>Origen</span>
        <select className={style.select} onChange={handleOrigin}>
          <option value="all">All</option>
          <option value="db">DB</option>
          <option value="api">API</option>
        </select>
        <span>Alfabéticamente</span>
        <select className={style.select} onChange={handleOrder}>
          <option value="all">Original</option>
          <option value="ascen">Ascendente</option>
          <option value="descen">Descendente</option>
        </select>
        <span>Ataque</span>
        <select className={style.select} onChange={handleOrderAttack}>
          <option value="all">Original</option>
          <option value="ascen">Ascendente</option>
          <option value="descen">Descendente</option>
        </select>
      </div>
    </div>
  );
}

export default Nav;
