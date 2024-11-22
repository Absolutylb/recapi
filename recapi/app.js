// app.js
const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();
app.use(express.json());

app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
