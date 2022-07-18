import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../Redux/actions";
import Nav from "../../Components/Nav/Nav";
import Paginado from "../../Components/Paginacion/Paginacion";

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      {pokemons.length > 0 ? (
        <div>
          <Nav />
          <Paginado data={pokemons} pageLimit={5} dataLimit={10} />
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}

      {/* <Cards pokemons={pokemons} /> */}
    </div>
  );
}

export default Home;
