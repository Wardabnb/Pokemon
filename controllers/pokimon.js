import { Pokimon } from "../models/pokimon.js";
export async function getAllPokimon(req, res) {
  const pokemons = await Pokimon.find();
  res.json(pokemons);
}
export async function getPokimonById(req, res) {
  const id = req.params.id;
  const pokemon = await Pokimon.findById(id);
  res.json(pokemon);
}
export async function createPokimon(req, res) {
  const { name, category, image, attack, deffense, speed } = req.body;
  const foundPokemon = await Pokimon.findOne({ name });
  if (foundPokemon) {
    return res.status(400).json({ message: "pokemon already exist" });
  }
  const CreatedPokimons = await Pokimon.create({
    name,
    category,
    image,
    attack,
    deffense,
    speed,
  });

  console.log("CreatedPokimons", CreatedPokimons);
  res.json(CreatedPokimons);
}
export async function deletePokimon(req, res) {
  const id = req.params.id;
  const pokemon = await Pokimon.findByIdAndDelete(id);
  res.json(pokemon);
}
