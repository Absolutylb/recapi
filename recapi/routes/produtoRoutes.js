
const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();

router.post('/', produtoController.createProduto);
router.get('/', produtoController.getAllProdutos);
router.get('/:produtoId', produtoController.getProdutoById);
router.put('/:produtoId', produtoController.updateProduto);
router.delete('/:produtoId', produtoController.deleteProduto);

module.exports = router;
