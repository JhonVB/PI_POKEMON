import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../Redux/actions";
import Nav from "../../Components/Nav/Nav";
import Paginado from "../../Components/Paginacion/Paginacion";

function Home() {
  const dispatch = useDispatch();

  const { pokemons, order } = useSelector((state) => state);
  const paginas = () => Math.ceil(pokemons.length / 12);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      {pokemons.length > 0 ? (
        <div>
          <Nav />
          <Paginado
            data={pokemons}
            pageLimit={paginas()}
            dataLimit={12}
            order={order}
          />
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}

export default Home;
