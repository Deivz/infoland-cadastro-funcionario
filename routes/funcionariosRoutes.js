import express from "express";
import FuncionarioController from "../controllers/funcionariosController.js";

const router = express.Router();

router
    .post("/funcionarios", FuncionarioController.adicionarFuncionarios)
    .get("/funcionarios", FuncionarioController.listarFuncionarios);

export default router