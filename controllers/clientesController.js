`use strict`;

const listaClientes = require("../models/clientesModels");

const listarClientes = (req, res) => {
    res.json(listaClientes);
}

const listarClienteId = (req, res) => {
    const id = req.params.id;
    const cliente = listaClientes.find(cliente => cliente.id == id);

    if(!cliente){
        res.status(404).json({
            message: `Cliente não encontrado`
        })
    }

    res.status(200).json(cliente);
}

const cadastrarCliente = (req, res) => {
    const novoCliente = {
        id: listaClientes.length + 1,
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    }

    listaClientes.push(novoCliente);

    res.status(201).json({
        message: `Cliente cadastrado com sucesso`,
        cliente: novoCliente
    });
}

const editarClienteId = (req, res) => {
    try{
        const id = req.params.id;
        let cliente = listaClientes.find(cliente => cliente.id == id);

        if(!cliente){
            res.status(404).json({
                message: `Cliente ${id} não encontrado`
            });
        }

        cliente.nome = req.body.nome
        cliente.marca = req.body.marca
        cliente.preco = req.body.preco
        
        res.status(200).json({
            message: `Cliente ${id} atualizado com sucesso`,
            cliente: cliente
        });

    } catch (erro){
        res.status(400).json({
            error: erro
        });
        console.log(`Error: `, erro);
    }
}

const deletarClienteId = (req, res) => {
    try{
        const id = req.params.id;
        let cliente = listaClientes.findIndex(cliente => cliente.id == id);

        if(cliente == -1){
            res.status(404).json({
                message: `Cliente ${id} não encontrado`
            });
        }

        listaClientes.splice(cliente, 1);
        res.status(200).json({
            message: `Cliente excluido com sucesso`
        });

    }catch(error){
        res.status(500).json({
            message: `Não foi possível excluir cliente`
        });
    }
}

module.exports = {
    listarClientes,
    listarClienteId,
    cadastrarCliente,
    editarClienteId,
    deletarClienteId
}