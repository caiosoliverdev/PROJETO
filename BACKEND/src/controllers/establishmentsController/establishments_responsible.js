const { EstablishmentsResponsibleViewModel } = require('../../view/establishmentsView');

module.exports =
{
    async Get(req, res) {
        try {
            const EstablishmentsResponsible = await EstablishmentsResponsibleViewModel.findAll();
            if (EstablishmentsResponsible.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': EstablishmentsResponsible });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const EstablishmentsResponsible = await EstablishmentsResponsibleViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': EstablishmentsResponsible });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const EstablishmentsResponsible = await EstablishmentsResponsibleViewModel.create(req.body);
            return res.json({ 'success': true, 'data': EstablishmentsResponsible });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { responsible_name, responsible_phone, responsible_email, document } = req.body;
            const EstablishmentsResponsible = await EstablishmentsResponsibleViewModel.findByPk(id);
            if (EstablishmentsResponsible) {
                EstablishmentsResponsible.responsible_name = responsible_name;
                EstablishmentsResponsible.responsible_phone = responsible_phone;
                EstablishmentsResponsible.responsible_email = responsible_email;
                EstablishmentsResponsible.document = document;
                await EstablishmentsResponsible.save();
            };
            return res.json({ 'success': true, 'data': EstablishmentsResponsible });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const EstablishmentsResponsible = await EstablishmentsResponsibleViewModel.findByPk(id);
            await EstablishmentsResponsible.destroy();
            return res.json({ 'success': true, 'data': EstablishmentsResponsible });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};