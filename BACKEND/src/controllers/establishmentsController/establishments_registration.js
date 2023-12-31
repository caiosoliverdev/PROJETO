const { EstablishmentsRegistrationViewModel } = require('../../view/establishmentsView');

module.exports =
{
    async Get(req, res) {
        try {
            const EstablishmentsRegistration = await EstablishmentsRegistrationViewModel.findAll();
            if (EstablishmentsRegistration.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': EstablishmentsRegistration });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const EstablishmentsRegistration = await EstablishmentsRegistrationViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': EstablishmentsRegistration });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    // async Post(req, res) {
    //     try {
    //         const EstablishmentsRegistration = await EstablishmentsRegistrationViewModel.create(req.body);
    //         return res.json({ 'success': true, 'data': EstablishmentsRegistration });
    //     } catch (erro) {
    //         return res.json({ "success": false, "erro": JSON.stringify(erro) });
    //     };
    // },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { telephone_establishment, email_establishment, password } = req.body;
            const EstablishmentsRegistration = await EstablishmentsRegistrationViewModel.findByPk(id);
            if (EstablishmentsRegistration) {
                EstablishmentsRegistration.telephone_establishment = telephone_establishment;
                EstablishmentsRegistration.email_establishment = email_establishment;
                EstablishmentsRegistration.password = password;
                await EstablishmentsRegistration.save();
            };
            return res.json({ 'success': true, 'data': EstablishmentsRegistration });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const EstablishmentsRegistration = await EstablishmentsRegistrationViewModel.findByPk(id);
            await EstablishmentsRegistration.destroy();
            return res.json({ 'success': true, 'data': EstablishmentsRegistration });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};