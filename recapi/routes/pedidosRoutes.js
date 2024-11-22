
const express = require('express');
const pedidoController = require('../controllers/pedidoController');
const router = express.Router();

router.post('/', pedidoController.createPedido);
router.get('/', pedidoController.getAllPedidos);
router.put('/:pedidoId/status', pedidoController.updateStatusPedido);

module.exports = router;
