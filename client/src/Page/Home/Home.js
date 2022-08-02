import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../Redux/actions";
import Nav from "../../Components/Nav/Nav";
import Paginado from "../../Components/Paginacion/Paginacion";
import Loading from "../../Utils/gifLoading.webp";
import "./Home.css";

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

  return (
    <div>
      {pokemons.length > 0 ? (
        <div className="fondo">
          <div className="nav">
            <Nav />
          </div>

          <Paginado
            data={data}
            pageLimit={paginas()}
            dataLimit={12}
            order={order}
            orderAttack={orderAttack}
          />
        </div>
      ) : (
        <img
          style={{
            marginLeft: "550px",
          }}
          src={Loading}
          alt="loading"
        />
      )}
    </div>
  );
}

export default Home;
