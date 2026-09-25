`use strict`;

const express = require("express");
const router = express.Router();
const produtosController = require(`../controllers/produtosController`);

// GET --------------------
router.get("/produtos", produtosController.listarProdutos);
router.get(`/produtos/:id`, produtosController.listarProdutoId);

// POST --------------------
router.post(`/produtos`, produtosController.cadastrarProduto);

// PUT --------------------
router.put("/produtos/:id", produtosController.editarProdutoId);

// DELETE --------------------
router.delete("/produtos/:id", produtosController.deletarProdutoId);

module.exports = router;