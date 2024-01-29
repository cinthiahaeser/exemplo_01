const Sequelize = require('sequelize');
const db = require('db');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  // host: 'localhost',
  // port: 49153,
  // database: 'consulta_credito',
  // username: 'postgres',
  // password: 'mysecretpassword',
  storage: "./src/database.sqlite",
  logging: false,
});

const produtoModel = (sequelizeProduto, DataTypes) => {
    const Produto = sequelizeProduto.define('Produtos', {
        codigo: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        preco: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    });
  
    return Produto;
};

const produto = produtoModel(sequelize, Sequelize.DataTypes);

module.exports = {
    produto,
    sequelize,
};