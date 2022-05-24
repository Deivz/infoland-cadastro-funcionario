import express from "express";
import app from "../app.js";
import funcionariosRoutes from "./funcionariosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Funcionários cadastrados:"})
    });

    app.use(
        express.json(),
        funcionariosRoutes
    )
}


export default routes