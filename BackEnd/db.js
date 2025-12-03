const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',     // seu usuário
  host: 'localhost',
  database: 'projeto_caixa', // nome do seu banco
  password: '11',
  port: 5432
});

module.exports = pool;