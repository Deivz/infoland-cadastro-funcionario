import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";

const app = express();

routes(app);

db.on("error", console.log.bind(console, "Erro na conexão!"));

db.once("open", () => console.log("Conexão realizada com sucesso!"));

export default app;