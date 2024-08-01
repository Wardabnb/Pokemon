import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import pokimonRouters from "./routers/pokimon.js";
import { DBConnect } from "./db.js";
import cors from "cors";
import { limiter } from "./middleware/rate-limiter.js";
import router from "./routers/views.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(limiter);
app.use("/public", express.static("./views"));
DBConnect();
app.set("view engine", "pug");
app.set("views", "./views");
app.use("/pokimon", pokimonRouters);
app.use("/public", router);

// Définir une route simple
app.get("/", (req, res) => {
  res.send("index"); // Assurez-vous que dynamic.ejs existe dans le dossier 'views'
});
app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port`, process.env.API_PORT);
});
