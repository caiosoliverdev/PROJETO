const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports = {
    async verifyJWT(req, res, next) {
        const token = req.headers['x-access-token'];
        const variavel = req.headers['t-conect'];
        const password = req.headers['password'];

        if (!token) return res.json({ success: false, erro: 'Envie seu token de acesso para prosseguir.' });
        if (!variavel && variavel !== "mobile" || !variavel && variavel !== "web") return res.json({ success: false, erro: 'Falha ao identificar a variavel de conexão.' });
        if (!password) return res.json({ success: false, erro: 'Informe a senha de conexão' });

        jwt.verify(token, process.env.secret_jwt, function (err, decoded) {
            if (err) return res.json({ success: false, erro: 'Falha ao autentificar token de acesso.' });
            req.userId = decoded.id;
            next();
        });
    },
    async verifyParams(req, res, next) {
        const variavel = req.headers['t-conect'];
        const password = req.headers['password'];
        if (!variavel && variavel !== "mobile" || !variavel && variavel !== "web") return res.json({ success: false, erro: 'Falha ao identificar a variavel de conexão.' });
        if (!password) return res.json({ success: false, erro: 'Informe a senha de conexão' });
        next();
    }
};