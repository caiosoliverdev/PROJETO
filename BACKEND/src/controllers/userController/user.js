const { UserViewModel } = require('../../view/userView');

module.exports =
{
    async Get(req, res) {
        try {
            const User = await UserViewModel.findAll();
            if (User.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': User });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const User = await UserViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': User });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const User = await UserViewModel.create(req.body);
            return res.json({ 'success': true, 'data': User });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { avatar, first_name, last_name, document, active } = req.body;
            const User = await UserViewModel.findByPk(id);
            if (User) {
                User.avatar = avatar;
                User.first_name = first_name;
                User.last_name = last_name;
                User.document = document;
                User.active = active;
                await User.save();
            };
            return res.json({ 'success': true, 'data': User });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const User = await UserViewModel.findByPk(id);
            await User.destroy();
            return res.json({ 'success': true, 'data': User });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};