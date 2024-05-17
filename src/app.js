const express = require('express');
const sequelize = require('../config/database');
const app = express();
const router = require('./router');

app.use(router);

sequelize.authenticate().then(() => {
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
}).catch(err => {
  console.error('Erro ao conectar com o banco de dados:', err);
});

module.exports = app;
