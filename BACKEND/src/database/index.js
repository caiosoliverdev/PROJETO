const Sequelize = require('sequelize');
const Mysql = require('mysql2/promise');
require('dotenv').config();

Mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
}).then(connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`).then((res) => {
        console.info("Database Criada");
    })
});

const DbConnect = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST
    }
);
setTimeout(async () => {
    await DbConnect.sync();
    console.info("Tabelas Ok");
}, 5000);

module.exports = DbConnect;