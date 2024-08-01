import express from "express";

const pokimonRouters = express.Router();
pokimonRouters.get("/home", (req, res) => {
  res.render("index");
});
pokimonRouters.get("/add", (req, res) => {
  res.render("add");
});
pokimonRouters.get("/:id", (req, res) => {
  res.render("pokemon");
});

export default pokimonRouters;
