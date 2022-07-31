const axios = require("axios");
const e = require("express");
const { allPokemons } = require("../Services/index");
const { Pokemon, Type } = require("../db");

const getPokemons = async (req, res) => {
  const { name } = req.query;
  const pokemons = await allPokemons();
  console.log(pokemons);
  if (name) {
    let encontrados = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    encontrados.length > 0 ? res.send(encontrados) : res.send("no existe");
  } else {
    res.send(pokemons);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemons = await allPokemons();
    const pokemonId = pokemons.find((e) => e.id == id);
    pokemonId ? res.send(pokemonId) : res.send("No existe");
  } catch (error) {
    res.send("Error en el info del Pokemon");
  }
};

const createPokemon = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } =
      req.body;

    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    const idsType = types.map((type) => type.id);
    const newType = await Type.findAll({
      where: { id: idsType },
      attribute: ["name"],
    });

    await newPokemon.addType(newType);
    res.send(newPokemon);
  } catch (error) {}
};

module.exports = {
  getPokemons,
  getById,
  createPokemon,
};
