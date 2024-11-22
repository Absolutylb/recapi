
module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Produto;
  };
  