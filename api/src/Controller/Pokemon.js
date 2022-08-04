const axios = require("axios");
const e = require("express");
const { allPokemons, getByName, detailId } = require("../Services/index");
const { Pokemon, Type } = require("../db");

const getPokemons = async (req, res) => {
  const { name } = req.query;

  let pokemons = [];
  if (!name) {
    pokemons = await allPokemons();
  } else {
    pokemons = await getByName(name);
  }

  res.send(pokemons);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id > 40) {
      const pokemon = await detailId(id);
      res.send(pokemon);
    } else {
      const pokemons = await allPokemons();
      const pokemonId = pokemons.find((e) => e.id == id);
      pokemonId ? res.send(pokemonId) : res.send("No existe");
    }
  } catch (error) {
    res.send("Error en el info del Pokemon");
  }
};

const createPokemon = async (req, res) => {
  try {
    let { name, image, hp, attack, defense, speed, height, weight, types } =
      req.body;

    name = name.toLowerCase();

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
