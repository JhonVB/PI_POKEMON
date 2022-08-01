import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterType, filterOrigin, orderName } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.types);

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

  return (
    <div>
      <Link to="/formulario">
        <button>Create Pokemons</button>
      </Link>
      <input type="text" />
      <select onChange={handleType}>
        <option value="all">all</option>
        {state?.map((type) => (
          <option id={type.id} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <select onChange={handleOrigin}>
        <option value="all">All</option>
        <option value="db">DB</option>
        <option value="api">API</option>
      </select>

      <select onChange={handleOrder}>
        <option value="ascen">Ascendente</option>
        <option value="descen">Descendente</option>
        <option value="attack">Attack</option>
      </select>
    </div>
  );
}

export default Nav;
