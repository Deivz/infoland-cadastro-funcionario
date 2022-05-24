import mongoose from "mongoose";

const funcionarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        cargo: {type: String, required: true},
        senha: {type: String, required: true}
    }
);

const funcionarios = mongoose.model('funcionarios', funcionarioSchema);

export default funcionarios;