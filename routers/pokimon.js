import express from "express";

import {
  createPokimon,
  deletePokimon,
  getAllPokimon,
  getPokimonById,
} from "../controllers/pokimon.js";

const pokimonRouters = express.Router();
pokimonRouters.get("/", getAllPokimon);
pokimonRouters.get(`/:id`, getPokimonById);
pokimonRouters.post("/", createPokimon);
pokimonRouters.delete("/:id", deletePokimon);
export default pokimonRouters;
