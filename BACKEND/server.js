const express = require('express');
const routes = require('./src/routers');
const cors = require('cors');
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');
const moment = require('moment-timezone');
const fs = require('fs');
const path = require('path');
const app = express();
require('dotenv').config();

// const log = fs.createWriteStream(
//     path.join(__dirname, "./src/logs", `${moment().format("YYYY-MM-DD HH:mm:ss")}.log`), { flags: "a" }
// );

// app.use(bodyParser.json());
// morganBody(app, {
//     noColors: true,
//     stream: log,
// });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen( process.env.PORT, () => {
    const url = 'http://localhost:'  +  process.env.PORT;
    console.log('Servidor iniciado ' + url)
});