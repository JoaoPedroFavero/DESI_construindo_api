`use strict`;

const express = require("express");
const router = express.Router();
const clientesController = require(`../controllers/clientesController`);

// GET --------------------
router.get("/clientes", clientesController.listarClientes);
router.get(`/clientes/:id`, clientesController.listarClienteId);

// POST --------------------
router.post(`/clientes`, clientesController.cadastrarCliente);

// PUT --------------------
router.put("/clientes/:id", clientesController.editarClienteId);

// DELETE --------------------
router.delete("/clientes/:id", clientesController.deletarClienteId);

module.exports = router;