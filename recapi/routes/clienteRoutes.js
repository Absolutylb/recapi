
const express = require('express');
const clienteController = require('../controllers/clienteController');
const router = express.Router();

router.post('/', clienteController.createCliente);
router.get('/', clienteController.getAllClientes);

module.exports = router;
