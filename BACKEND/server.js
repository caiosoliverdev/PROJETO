const express = require('express');
const routes = require('./src/routers');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen( process.env.PORT, () => {
    const url = 'http://localhost:'  +  process.env.PORT;
    console.log('Servidor iniciado ' + url)
});
