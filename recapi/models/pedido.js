
module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
      clienteId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id',
        },
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'em andamento',
      },
      dataPedido: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    Pedido.associate = (models) => {
      Pedido.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
    };
  
    return Pedido;
  };
  