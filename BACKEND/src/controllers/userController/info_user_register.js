const { Info_user_registerViewModel } = require('../../view/userView');

module.exports =
{
    async Get(req, res) {
        try {
            const Info_user_register = await Info_user_registerViewModel.findAll();
            if (Info_user_register.length === 0) {
                return res.json({ "sucesso": false, "erro": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': Info_user_register });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const Info_user_register = await Info_user_registerViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': Info_user_register });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const Info_user_register = await Info_user_registerViewModel.create(req.body);
            return res.json({ 'success': true, 'data': Info_user_register });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { email, phone, password } = req.body;
            const Info_user_register = await Info_user_registerViewModel.findByPk(id);
            if (Info_user_register) {
                Info_user_register.email = email;
                Info_user_register.phone = phone;
                Info_user_register.password = password;
                await Info_user_register.save();
            };
            return res.json({ 'success': true, 'data': Info_user_register });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const Info_user_register = await Info_user_registerViewModel.findByPk(id);
            await Info_user_register.destroy();
            return res.json({ 'success': true, 'data': Info_user_register });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};