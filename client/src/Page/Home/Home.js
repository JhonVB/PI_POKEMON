import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../Redux/actions";
import Nav from "../../Components/Nav/Nav";
import Paginado from "../../Components/Paginacion/Paginacion";

function Home() {
  const dispatch = useDispatch();
  const { pokemons, order, type, origin, orderAttack } = useSelector(
    (state) => state
  );
  const paginas = () => Math.ceil(pokemons.length / 12);
  let data = [];

  const byOrigin = {
    db: "string",
    api: "number",
  };

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  if (type == "all" && origin == "all") data = pokemons;
  else if (type != "all" && origin == "all") {
    data = pokemons.filter((pokemon) =>
      pokemon.types.find((tipo) => tipo.name == type)
    );
  } else if (type == "all" && origin !== "all") {
    data = pokemons.filter((el) => byOrigin[origin] === typeof el.id);
  } else {
    data = pokemons.filter((pokemon) =>
      pokemon.types.find((tipo) => tipo.name == type)
    );
    data = data.filter((el) => byOrigin[origin] === typeof el.id);
  }

  console.log(data);

  return (
    <div>
      {pokemons.length > 0 ? (
        <div>
          <Nav />
          <Paginado
            data={data}
            pageLimit={paginas()}
            dataLimit={12}
            order={order}
            orderAttack={orderAttack}
          />
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}

export default Home;
