const Sequelize = require('sequelize');
const Mysql = require('mysql2/promise');
require('dotenv').config();


Mysql.createConnection({
    host: process.env.db_host,
    port: process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_password,
}).then(connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.db_data};`).then((res) => {
        console.info("Database Ok");
    })
});

const DbConnect = new Sequelize(
    process.env.db_data,
    process.env.db_user,
    process.env.db_password,
    {
        dialect: process.env.db_dialect,
        host: process.env.db_host
    }
);
setTimeout(async () => {
    console.info("Iniciando Tabelas");
    await DbConnect.sync();
    console.info("Tabelas Ok");
}, 5000);

module.exports = DbConnect;