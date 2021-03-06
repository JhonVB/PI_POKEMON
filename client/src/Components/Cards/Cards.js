import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ pokemons }) {
  return (
    <div className={style.container}>
      {pokemons?.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        );
      })}
    </div>
  );
}
