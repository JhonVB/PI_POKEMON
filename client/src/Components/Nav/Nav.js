import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/formulario">
        <button>Create Pokemons</button>
      </Link>
      <input type="text" />
    </div>
  );
}

export default Nav;
