import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import pokimonRouters from "./routers/pokimon.js";
import { DBConnect } from "./db.js";
import cors from "cors";
import { limiter } from "./middleware/rate-limiter.js";
import router from "./routers/views.js";

const app = express();

const corsOptions = {
  origin: 'https://pokemon-khys.onrender.com',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(limiter);
app.use("/public", express.static("./views"));

DBConnect();
app.set("view engine", "pug");
app.set("views", "./views");

app.use("/pokimon", pokimonRouters);
app.use("/public", router);

app.get("/", (req, res) => {
  res.send("index"); 
});


app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port`, process.env.API_PORT);
});
