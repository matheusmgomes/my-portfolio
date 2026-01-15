require("dotenv").config();
const knex = require("knex");
const db = knex({
  client: "mysql2",
  connection: {
    host: process.env.HOST, // Melhor usar o IP no Linux para evitar problemas de DNS
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
  },
  pool: { min: 0, max: 10 },
});

db.raw("SELECT 1")
  .then(() => {
    console.log("conectado ao mysql");
  })
  .catch((err) => {
    console.error("erro na conexao");
  });

module.exports = db;
