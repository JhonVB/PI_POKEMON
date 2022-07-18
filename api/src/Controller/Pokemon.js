const axios = require("axios");
const e = require("express");
const { allPokemons } = require("../Services/index");
const { Pokemon, Type } = require("../db");

const getPokemons = async (req, res) => {
  const pokemons = await allPokemons();

  res.send(pokemons);
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
    const { name, image, hp, attack, defense, speed, height, weight, type } =
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

    //  console.log(newPokemon);
    const idsType = type.map((type) => type.id);
    console.log(idsType);

    const newType = await Type.findAll({
      where: { id: idsType },
      attribute: ["name"],
    });

    console.log(newType);

    await newPokemon.addType(newType);
    res.send(newPokemon);
  } catch (error) {}
};
module.exports = {
  getPokemons,
  getById,
  createPokemon,
};
