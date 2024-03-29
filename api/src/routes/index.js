const { Router } = require("express");
const {
  getPokemons,
  getById,
  createPokemon,
} = require("../Controller/Pokemon");
const { getTypes } = require("../Controller/Type");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getPokemons);
router.get("/types", getTypes);
router.get("/pokemons/:id", getById);
router.post("/pokemons", createPokemon);

module.exports = router;
