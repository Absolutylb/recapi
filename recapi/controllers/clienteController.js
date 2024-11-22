
const { Cliente } = require('../models');


exports.createCliente = async (req, res) => {
  try {
    const { nome, email, telefone, endereco } = req.body;
    const novoCliente = await Cliente.create({ nome, email, telefone, endereco });
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar cliente' });
  }
};


exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar clientes' });
  }
};
