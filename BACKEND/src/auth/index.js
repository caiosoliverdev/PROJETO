const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports = {
    async verifyJWT(req, res, next) {
        const token = req.headers['x-access-token'];
        if (!token) return res.json({ sucesso: false, message: 'Envie seu token de acesso para prosseguir.' });

        jwt.verify(token, process.env.secret_jwt, function (err, decoded) {
            if (err) return res.json({ sucesso: false, message: 'Falha ao autentificar token de acesso.' });
            req.userId = decoded.id;
            next();
        });
    }
};