
const { Pedido } = require('../models');


exports.createPedido = async (req, res) => {
  try {
    const { clienteId, itens } = req.body;
    const novoPedido = await Pedido.create({ clienteId, status: 'em andamento', dataPedido: new Date() });
    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
};


exports.getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar pedidos' });
  }
};


exports.updateStatusPedido = async (req, res) => {
  try {
    const { status } = req.body;
    const pedido = await Pedido.findByPk(req.params.pedidoId);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    await pedido.update({ status });
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar status do pedido' });
  }
};
