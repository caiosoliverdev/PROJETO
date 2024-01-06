const jwt = require('jsonwebtoken');
const moment = require('moment-timezone');
require('dotenv').config();

module.exports = {
    async verifyJWT(req, res, next) {
        const token = req.headers['x-access-token'];

        if (!token) return res.json({ success: false, erro: 'Envie seu token de acesso para prosseguir.' });

        jwt.verify(token, process.env.SECRET_JWT, function (err, decoded) {
            if (err) return res.json({ success: false, erro: 'Falha ao autentificar token de acesso.' });
            req.userId = decoded.id;
            next();
        });
    },
    async criartoken(id) {
        const start = moment(new Date()).tz("America/Sao_Paulo").format();
        const end = moment(new Date()).add(process.env.EXPIRE, 'second').tz("America/Sao_Paulo").format();
        const token = jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: process.env.EXPIRE });
      return  {start, end, token};
    }
};