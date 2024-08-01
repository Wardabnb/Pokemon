import { Schema } from "mongoose";
import mongoose from "mongoose";
const pokimonSchema = new Schema({
  name: String,
  category: String,
  image: String,
  attack: Number,
  defense: Number,
  speed: Number,
});
export const Pokimon = mongoose.model("Pokimon", pokimonSchema);
