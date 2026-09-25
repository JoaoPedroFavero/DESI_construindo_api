`use strict`;

const produtosModel = require("../models/produtosModels");

const listarProdutos = async (req, res) => {
    const produtos = await produtosModel.buscarTodos();
    if(produtos.length == 0){
        res.json({message: `Não há produtos cadastrados`});
    }
    res.json(produtos);
}

const listarProdutoId = async (req, res) => {
    const id = req.params.id;
    const produto = await produtosModel.buscarPorId(id);

    if(!produto){
        res.status(404).json({
            message: `Produto não encontrado`
        })
    }

    res.status(200).json(produto);
}

const cadastrarProduto = async (req, res) => {
    const {nome, marca, preco} = req.body;
    const produto = await produtosModel.criar(nome, marca, preco);

    res.status(200).json({
        message: `Produto cadastrado com sucesso`,
        produto: produto
    });
}

const editarProdutoId = async (req, res) => {
    const id = req.params.id;
    const produto = await produtosModel.buscarPorId(id)
    const {nome, marca, preco} = req.body;

    if(!produto){
        res.status(404).json({
            message: `Produto ${id} não encontrado`
        });
    }

    const produtoAtualizado  = produtosModel.editar(id, nome, marca, preco);
    
    res.status(200).json({
        message: `Produto ${id} atualizado com sucesso`,
        produto: produtoAtualizado
    });

}

const deletarProdutoId = async (req, res) => {
    const id = req.params.id;
    let produto = await produtosModel.buscarPorId(id);

    if(!produto){
        res.status(404).json({
            message: `Produto ${id} não encontrado`
        });
    }

    const excluido = produtosModel.excluir(id);
    console.log(excluido);
    
    res.status(200).json({
        message: `Produto excluido com sucesso`
    });

}

module.exports = {
    listarProdutos,
    listarProdutoId,
    cadastrarProduto,
    editarProdutoId,
    deletarProdutoId
}