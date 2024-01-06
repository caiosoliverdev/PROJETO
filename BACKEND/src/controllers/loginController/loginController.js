const { criartoken } = require("../../auth");
const { Info_user_registerViewModel } = require("../../view/userView");
const { EstablishmentsRegistrationViewModel } = require("../../view/establishmentsView");
const bcrypt = require('bcryptjs');

module.exports = {

    async Login(req, res) {
        try {
            const { email, password } = req.body;
            const response_estabe = await EstablishmentsRegistrationViewModel.findAll({
                where: [{ email_establishment: email }]
            });

            const response_user = await Info_user_registerViewModel.findAll({
                where: [{ email: email }]
            });

            const response = response_estabe.length === 0 ? response_user : response_estabe;

            if (response.length === 0) {
                return res.json({
                    success: false,
                    erro: "Esse email não esta cadastrado"
                });
            };

            if (!(await bcrypt.compare(password, response.map(e => (e.password)).toString()))) {
                return res.json({
                    success: false,
                    erro: "A senha está inválida!"
                });
            };
            const token = await criartoken(response.map(e => (e['id'])).toString());

            return res.json({
                "success": true, "data": {
                    usuarioId: response.map(e => (e['id'])).toString(),
                    email: email,
                    token: token.token,
                    start: token.start,
                    end: token.end
                }
            });
        } catch (error) {
            console.log(error);
            return res.json({ "success": false, "erro": JSON.stringify(error) });
        };
    }
};