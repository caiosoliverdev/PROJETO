const { validationEstablishments } = require('../../validations/registerValidations');
const { EstablishmentsViewModel,
    EstablishmentsInformationsViewModel,
    EstablishmentsRegistrationViewModel } = require('../../view/establishmentsView');
const bcrypt = require('bcryptjs');

module.exports =
{
    async Post(req, res) {
        try {
            const {
                ModelEstablishments,
                ModelEstablishmentsInformations,
                ModelEstablishmentsRegistration
            } = req.body;

            //#region VALIDA MODELS
            if ((await validationEstablishments(ModelEstablishments)).erro) {
                if((await validationEstablishments(ModelEstablishments)).field){
                    return res.json({ "sucesso": false, "erro": (await validationEstablishments(ModelEstablishments)).message, field:(await validationEstablishments(ModelEstablishments)).field });
                }else{
                    return res.json({ "sucesso": false, "erro": (await validationEstablishments(ModelEstablishments)).message });
                };
            };
            //#endregion

            const GetEstablishments = await EstablishmentsInformationsViewModel.findAll({
                where: [{ document: ModelEstablishmentsInformations.document }]
            });
            const GetEstablishmentsRegistration = await EstablishmentsRegistrationViewModel.findAll({
                where: [{ email_establishment: ModelEstablishmentsRegistration.email_establishment }]
            });
            if (GetEstablishments.length > 0) {
                return res.json({ "sucesso": false, "erro": "Este CNPJ já esta cadastrado." });
            };
            if (GetEstablishmentsRegistration.length > 0) {
                return res.json({ "sucesso": false, "erro": "Este EMAIL já esta cadastrado." });
            };
            const Establishments = await EstablishmentsViewModel.create(ModelEstablishments);
            await EstablishmentsRegistrationViewModel.create({
                telephone_establishment: ModelEstablishmentsRegistration.telephone_establishment,
                email_establishment: ModelEstablishmentsRegistration.email_establishment,
                password: await bcrypt.hash(ModelEstablishmentsRegistration.password, 8),
                active: ModelEstablishmentsRegistration.active
            });
            return res.json({ 'success': true, 'data': Establishments });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    }

};