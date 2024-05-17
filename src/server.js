const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 30001;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});