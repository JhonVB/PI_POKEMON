import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterType } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();
  //   const [type, setType] = useState("");
  const state = useSelector((state) => state.types);

  const handleType = (e) => {
    //  setType(e.target.value);
    dispatch(filterType(e.target.value));
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
      <select>
        <option value="all">All</option>
        <option value="db">DB</option>
        <option value="api">API</option>
      </select>
    </div>
  );
}

export default Nav;
