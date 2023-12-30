const { EstablishmentsInformationsViewModel } = require('../../view/establishmentsView');

module.exports =
{
    async Get(req, res) {
        try {
            const EstablishmentsInformations = await EstablishmentsInformationsViewModel.findAll();
            if (EstablishmentsInformations.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': EstablishmentsInformations });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {

        try {
            const { id } = req.params;
            const EstablishmentsInformations = await EstablishmentsInformationsViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': EstablishmentsInformations });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const EstablishmentsInformations = await EstablishmentsInformationsViewModel.create(req.body);
            return res.json({ 'success': true, 'data': EstablishmentsInformations });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { registration_type, document, road, number, neighborhood, zip_code, city, state } = req.body;
            const EstablishmentsInformations = await EstablishmentsInformationsViewModel.findByPk(id);
            if (EstablishmentsInformations) {
                EstablishmentsInformations.registration_type = registration_type;
                EstablishmentsInformations.document = document;
                EstablishmentsInformations.road = road;
                EstablishmentsInformations.number = number;
                EstablishmentsInformations.neighborhood = neighborhood;
                EstablishmentsInformations.zip_code = zip_code;
                EstablishmentsInformations.city = city;
                EstablishmentsInformations.state = state;
                await EstablishmentsInformations.save();
            };
            return res.json({ 'success': true, 'data': EstablishmentsInformations });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const EstablishmentsInformations = await EstablishmentsInformationsViewModel.findByPk(id);
            await EstablishmentsInformations.destroy();
            return res.json({ 'success': true, 'data': EstablishmentsInformations });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};