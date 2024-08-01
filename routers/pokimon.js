import express from "express";

import {
  createPokimon,
  deletePokimon,
  getAllPokimon,
  getPokimonById,
} from "../controllers/pokimon.js";
import { verification } from "../middleware/auth.js";

const pokimonRouters = express.Router();
pokimonRouters.get("/", getAllPokimon);
pokimonRouters.get(`/:id`, getPokimonById);
pokimonRouters.post("/", verification,createPokimon);
pokimonRouters.delete("/:id",verification, deletePokimon);
export default pokimonRouters;
