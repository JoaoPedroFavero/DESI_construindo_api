`use strict`;

const clientesModels = require("../models/clientesModels");

const listarClientes = async (req, res) => {
    const clientes = await clientesModels.buscarTodos();

    if(clientes.length == 0){
        res.status(200).json({ message: `Não há clientes` });
    }

    res.status(200).json(clientes);
}

const listarClienteId = (req, res) => {
    const id = req.params.id;
    const cliente = clientesModels.buscarPorId(id);

    if(!cliente){
        res.status(404).json({
            message: `Cliente não encontrado`
        })
    }

    res.status(200).json(cliente);
}

const cadastrarCliente = (req, res) => {
    const {nome, email, telefone} = req.body;
    const novoCliente = clientesModels.criar(nome, email, telefone);

    res.status(200).json({
        message: `Cliente cadastrado com sucesso`,
        cliente: novoCliente
    });
}

const editarClienteId = (req, res) => {
    const id = req.params.id;
    const {nome, email, telefone} = req.body
    let cliente = clientesModels.buscarPorId(id);

    if(!cliente){
        res.status(404).json({
            message: `Cliente ${id} não encontrado`
        });
    }

    const clienteAtualizado = clientesModels.editar(id, nome, email, telefone)
    
    res.status(200).json({
        message: `Cliente ${id} atualizado com sucesso`,
        cliente: clienteAtualizado
    });

}

const deletarClienteId = (req, res) => {
    const id = req.params.id;
    let cliente = clientesModels.buscarPorId(id);

    if(!cliente){
        res.status(404).json({
            message: `Cliente ${id} não encontrado`
        });
    }

    const excluido = clientesModels.excluir(id);
    console.log(excluido);
    
    res.status(200).json({
        message: `Cliente excluido com sucesso`
    });

}

module.exports = {
    listarClientes,
    listarClienteId,
    cadastrarCliente,
    editarClienteId,
    deletarClienteId
}