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
    error.name = "Name is required";
  } else if (!/[a-zA-Z ]{2,254}/.test(pokemon.name)) {
    error.name = "Name is invalid";
  }

  if (!pokemon.image) {
    error.image = "Image is required";
  } else if (
    !/(?:(?:https?:\/\/))[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/=]*(\.jpg|\.png|\.jpeg|\.webp))/.test(
      pokemon.image
    )
  ) {
    error.image = "Igrese una URL de imagen valida ";
  }

  if (!pokemon.height) {
    error.height = "Origin is required";
  } else if (!/(^\d{1,10}$)/.test(pokemon.height)) {
    error.height = "Origin is invalid";
  }

  if (!pokemon.weight) {
    error.weight = "species is required";
  } else if (!/(^\d{1,10}$)/.test(pokemon.weight)) {
    error.weight = "species is invalid";
  }

  if (!pokemon.hp) {
    error.hp = "species is required";
  } else if (!/(^\d{1,10}$)/.test(pokemon.hp)) {
    error.hp = "species is invalid";
  }

  if (!pokemon.attack) {
    error.attack = "species is required";
  } else if (!/(^\d{1,10}$)/.test(pokemon.attack)) {
    error.attack = "species is invalid";
  }

  if (!pokemon.defense) {
    error.defense = "species is required";
  } else if (!/(^\d{1,10}$)/.test(pokemon.defense)) {
    error.defense = "species is invalid";
  }

  if (!pokemon.speed) {
    error.speed = "species is required";
  } else if (!/(^\d{1,10}$)/.test(pokemon.speed)) {
    error.speed = "species is invalid";
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
    setPokemon({ ...pokemon, [e.target.name]: e.target.value });
    let objError = validate({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
    setErrors(objError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemon(pokemon));
    setPokemon({
      name: "",
      image: "",
      height: "",
      weight: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      types: [],
    });
    alert("Formulario enviado");
    setTimeout(() => {
      navegador("/home");
    }, 1000);
  };

  return (
    <div className={style.master}>
      <div className={style.contenedorButton}>
        <button className={style.button} onClick={() => navegador("/home")}>
          Home
        </button>
      </div>

      <div className={style.contenedor}>
        <div className={style.contenedorForm}>
          <form onSubmit={handleSubmit}>
            <div className={style.contenedorInputs}>
              <p>Nombre</p>
              <input type="text" name="name" onChange={handelChange} required />
              {errors.name && <p>{errors.name}</p>}

              <p>Imagen</p>
              <input
                type="text"
                name="image"
                onChange={handelChange}
                required
              />
              {errors.image && <p>{errors.image}</p>}

              <p>Altura</p>
              <input
                type="number"
                name="height"
                onChange={handelChange}
                required
              />
              {errors.height && <p>{errors.height}</p>}
              <p>Peso</p>
              <input
                type="number"
                name="weight"
                onChange={handelChange}
                required
              />
              {errors.weight && <p>{errors.weight}</p>}

              <p>Vida</p>
              <input type="number" name="hp" onChange={handelChange} required />
              {errors.hp && <p>{errors.hp}</p>}

              <p>Ataque</p>
              <input
                type="number"
                name="attack"
                onChange={handelChange}
                required
              />
              {errors.attack && <p>{errors.attack}</p>}

              <p>Defensa</p>
              <input
                type="number"
                name="defense"
                onChange={handelChange}
                required
              />
              {errors.defense && <p>{errors.defense}</p>}
              <p>Velocidad</p>
              <input
                type="number"
                name="speed"
                onChange={handelChange}
                required
              />
              {errors.speed && <p>{errors.speed}</p>}

              <input
                type="submit"
                disabled={
                  pokemon.types.length < 1 || Object.keys(errors).length
                }
              />
              {errors.episode && <p>{errors.episode}</p>}
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
