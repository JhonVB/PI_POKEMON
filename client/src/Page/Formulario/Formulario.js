import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../Redux/actions";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPokemon } from "../../Redux/actions";
import style from "./Formulario.module.css";
function validate(pokemon) {
  let error = {};

  if (!pokemon.name) {
    error.name = "Nombre es requerido";
  } else if (!/[a-zA-Z ]{2,254}/.test(pokemon.name)) {
    error.name = "Nombre es invalido";
  }

  if (!pokemon.image) {
    error.image = "Imagen es requerida";
  } else if (
    !/(?:(?:https?:\/\/))[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/=]*(\.jpg|\.png|\.jpeg|\.webp))/.test(
      pokemon.image
    )
  ) {
    error.image = "Igrese una URL de imagen valida";
  }

  if (!pokemon.height) {
    error.height = "Altura es requerida";
  } else if (!/(^\d{1,10}$)/.test(pokemon.height)) {
    error.height = "Solo se admiten enteros positivos";
  }

  if (!pokemon.weight) {
    error.weight = "Peso es requerido";
  } else if (!/(^\d{1,10}$)/.test(pokemon.weight)) {
    error.weight = "Peso invalido";
  }

  if (!pokemon.hp) {
    error.hp = "Vida es requerida";
  } else if (!/(^\d{1,10}$)/.test(pokemon.hp)) {
    error.hp = "Vida invalida";
  }

  if (!pokemon.attack) {
    error.attack = "Ataque es requerido";
  } else if (!/(^\d{1,10}$)/.test(pokemon.attack)) {
    error.attack = "Ataque es invalido";
  }

  if (!pokemon.defense) {
    error.defense = "Defensa es requerida";
  } else if (!/(^\d{1,10}$)/.test(pokemon.defense)) {
    error.defense = "Defensa es invalida";
  }

  if (!pokemon.speed) {
    error.speed = "Velocidad es requerida";
  } else if (!/(^\d{1,10}$)/.test(pokemon.speed)) {
    error.speed = "Velocidad es invalida";
  }

  return error;
}

function Formulario() {
  const dispatch = useDispatch();
  const navegador = useNavigate();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({ flag: false });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const handelCheked = (e) => {
    const id = e.target.id;
    const nombre = e.target.value;

    if (e.target.checked) {
      const obj = { name: nombre, id };
      setPokemon({
        ...pokemon,
        [e.target.name]: [...pokemon.types, obj],
      });
    } else {
      const nuevo = pokemon.types.filter((e) => e.id !== id);
      setPokemon({
        ...pokemon,
        [e.target.name]: nuevo,
      });
    }
  };

  const handelChange = (e) => {
    setPokemon({
      ...pokemon,

      [e.target.name]: e.target.value,
    });

    let objError = validate({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
    setErrors(objError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemon(pokemon));
    // setPokemon({});
    navegador("/home");
    alert("Formulario enviado");
  };

  return (
    <div className={style.master}>
      <div className={style.contenedorButton}>
        <button className={style.raise} onClick={() => navegador("/home")}>
          Home
        </button>
      </div>

      <div className={style.contenedor}>
        <div className={style.contenedorForm}>
          <form id="formulario" onSubmit={handleSubmit}>
            <div className={style.contenedorInputs}>
              <p>Nombre</p>
              <input
                className={style.input}
                name="name"
                onChange={handelChange}
                required
              />
              {errors.name && <p className={style.error}>{errors.name}</p>}

              <p>Imagen</p>
              <input
                className={style.input}
                name="image"
                onChange={handelChange}
                required
              />
              {errors.image && <p className={style.error}>{errors.image}</p>}

              <p>Altura</p>
              <input
                type="number"
                name="height"
                onChange={handelChange}
                required
                className={style.input}
              />
              {errors.height && <p className={style.error}>{errors.height}</p>}
              <p>Peso</p>
              <input
                type="number"
                name="weight"
                className={style.input}
                onChange={handelChange}
                required
              />
              {errors.weight && <p className={style.error}>{errors.weight}</p>}

              <p>Vida</p>
              <input
                className={style.input}
                type="number"
                name="hp"
                onChange={handelChange}
                required
              />
              {errors.hp && <p className={style.error}>{errors.hp}</p>}

              <p>Ataque</p>
              <input
                className={style.input}
                type="number"
                name="attack"
                onChange={handelChange}
                required
              />
              {errors.attack && <p className={style.error}>{errors.attack}</p>}

              <p>Defensa</p>
              <input
                type="number"
                name="defense"
                onChange={handelChange}
                required
              />
              {errors.defense && (
                <p className={style.error}>{errors.defense}</p>
              )}
              <p>Velocidad</p>
              <input
                type="number"
                name="speed"
                onChange={handelChange}
                required
                className={style.input}
              />
              {errors.speed && <p className={style.error}>{errors.speed}</p>}

              <input
                type="submit"
                className={style.raise}
                disabled={
                  pokemon.types.length < 1 || Object.keys(errors).length
                }
              />
            </div>
            <div className={style.contenedorTypos}>
              {types?.map((type) => {
                return (
                  <span key={type.id}>
                    <input
                      type="checkbox"
                      value={type.name}
                      name="types"
                      id={type.id}
                      onChange={(e) => handelCheked(e)}
                    />
                    {type.name}
                  </span>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
