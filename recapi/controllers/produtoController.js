
const { Produto } = require('../models');


exports.createProduto = async (req, res) => {
  try {
    const { nome, descricao, preco, estoque } = req.body;
    const novoProduto = await Produto.create({ nome, descricao, preco, estoque });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar produto' });
  }
};


exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
};


exports.getProdutoById = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.produtoId);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
};


exports.updateProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.produtoId);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    const { nome, descricao, preco, estoque } = req.body;
    await produto.update({ nome, descricao, preco, estoque });
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};


exports.deleteProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.produtoId);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    await produto.destroy();
    res.status(200).json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
};
