const { EstablishmentsViewModel } = require('../../view/establishmentsView');

module.exports =
{
    async Get(req, res) {
        try {
            const Establishments = await EstablishmentsViewModel.findAll();
            if (Establishments.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': Establishments });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const Establishments = await EstablishmentsViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': Establishments });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const Establishments = await EstablishmentsViewModel.create(req.body);
            return res.json({ 'success': true, 'data': Establishments });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { profile_photo, photo_cover, company_name, slogan, description } = req.body;
            const Establishments = await EstablishmentsViewModel.findByPk(id);
            if (Establishments) {
                Establishments.profile_photo = profile_photo;
                Establishments.photo_cover = photo_cover;
                Establishments.company_name = company_name;
                Establishments.slogan = slogan;
                Establishments.description = description;
                await Establishments.save();
            };
            return res.json({ 'success': true, 'data': Establishments });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const Establishments = await EstablishmentsViewModel.findByPk(id);
            await Establishments.destroy();
            return res.json({ 'success': true, 'data': Establishments });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};