const { Log_login_userViewModel } = require('../../view/userView');

module.exports =
{
    async Get(req, res) {
        try {
            const Log_login_user = await Log_login_userViewModel.findAll();
            if (Log_login_user.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': Log_login_user });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {

        try {
            const { id } = req.params;
            const Log_login_user = await Log_login_userViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': Log_login_user });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const Log_login_user = await Log_login_userViewModel.create(req.body);
            return res.json({ 'success': true, 'data': Log_login_user });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const {  longitude, latitude, platform } = req.body;
            const Log_login_user = await Log_login_userViewModel.findByPk(id);
            if (Log_login_user) {
                Log_login_user.date = date;
                Log_login_user.longitude = longitude;
                Log_login_user.latitude = latitude;
                Log_login_user.platform = platform;
                await Log_login_user.save();
            };
            return res.json({ 'success': true, 'data': Log_login_user });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const Log_login_user = await Log_login_userViewModel.findByPk(id);
            await Log_login_user.destroy();
            return res.json({ 'success': true, 'data': Log_login_user });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};