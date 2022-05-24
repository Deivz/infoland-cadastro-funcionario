import funcionarios from "../models/Funcionario.js";

export default class FuncionarioController{
    
    static adicionarFuncionarios = (req, res) => {
        
        let funcionario = new funcionarios(req.body);

        funcionario.save((err)=>{
            if (err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar funcionario.`})
                return;
            }

            res.status(201).send(funcionario.toJSON());
        });
    }
    
    static listarFuncionarios = (req, res) => {
        funcionarios.find((err, funcionarios) => {
            res.status(200).send(funcionarios);
        })
    }
}