const axios = require("axios");
const { Pokemon, Type } = require("../db");

const infoApi = async () => {
  try {
    const pageOne = (await axios.get(`https://pokeapi.co/api/v2/pokemon`)).data;
    const pageTwo = (await axios.get(pageOne.next)).data;

    const paginas = [pageOne.results, pageTwo.results];

    const infoAllPokemons = paginas
      .flat()
      .map((pokemons) => axios.get(pokemons.url));

    const allPokemons = await Promise.all(infoAllPokemons);

    const pokemon = allPokemons.map((info) => {
      const data = info.data;
      return {
        id: data.id,
        name: data.forms[0].name,
        height: data.height * 10,
        image: data.sprites.other.dream_world.front_default,
        weight: data.weight * 10,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        types: data.types.map((tipo) => {
          return {
            name: tipo.type.name,
            id: tipo.type.url.split("/")[6],
          };
        }),
      };
    });
    return pokemon;
  } catch (error) {
    return "error al traer los pokemons";
  }
};

const infoDb = async () => {
  try {
    const characterDb = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        throught: {
          attributes: [],
        },
      },
    });
    return characterDb;
  } catch (error) {
    return error;
  }
};

const allPokemons = async () => {
  const pokemonsApi = await infoApi();
  const pokemonsDb = await infoDb();

  const allPokemons = [...pokemonsApi, ...pokemonsDb];
  return allPokemons;
};

const uploadTypes = async () => {
  try {
    if (!(await Type.findAll()).length) {
      const promise = (await axios.get(" https://pokeapi.co/api/v2/type")).data;
      console.log(promise);
      const infoTypes = promise.results;
      const types = infoTypes.map((type) => {
        return {
          name: type.name,
          id: type.url.split("/")[6],
        };
      });
      await Type.bulkCreate(types);
      return types;
    } else {
      return await Type.findAll();
    }
  } catch (error) {}
};

// const getById = async () => {
//   return "estyo";
// };

module.exports = {
  allPokemons,
  uploadTypes,
};
