`use strict`;

const listaProdutos = require("../models/produtosModels");

const listarProdutos = (req, res) => {
    res.json(listaProdutos);
}

const listarProdutoId = (req, res) => {
    const id = req.params.id;
    const produto = listaProdutos.find(produto => produto.id == id);

    if(!produto){
        res.status(404).json({
            message: `Produto não encontrado`
        })
    }

    res.status(200).json(produto);
}

const cadastrarProduto = (req, res) => {
    const id = req.params.id;
    const produto = listaProdutos.find(produto => produto.id == id);

    if(!produto){
        res.status(404).json({
            message: `Produto não encontrado`
        })
    }

    res.status(200).json(produto);
}

const editarProdutoId = (req, res) => {
    try{
        const id = req.params.id;
        let produto = listaProdutos.find(produto => produto.id == id);

        if(!produto){
            res.status(404).json({
                message: `Produto ${id} não encontrado`
            });
        }

        produto.nome = req.body.nome
        produto.marca = req.body.marca
        produto.preco = req.body.preco
        
        res.status(200).json({
            message: `Produto ${id} atualizado com sucesso`,
            produto: produto
        });

    } catch (erro){
        res.status(400).json({
            error: erro
        });
        console.log(`Error: `, erro);
    }
}

const deletarProdutoId = (req, res) => {
    try{
        const id = req.params.id;
        let produto = listaProdutos.findIndex(produto => produto.id == id);

        if(produto == -1){
            res.status(404).json({
                message: `Produto ${id} não encontrado`
            });
        }

        listaProdutos.splice(produto, 1);
        res.status(200).json({
            message: `Produto excluido com sucesso`
        });

    }catch(error){
        res.status(500).json({
            message: `Não foi possível excluir produto`
        });
    }
}

module.exports = {
    listarProdutos,
    listarProdutoId,
    cadastrarProduto,
    editarProdutoId,
    deletarProdutoId
}