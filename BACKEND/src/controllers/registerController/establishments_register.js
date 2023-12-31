const { validationEstablishments, validationEstablishments_informations, validationEstablishments_registration, validationEstablishments_responsible } = require('../../validations/registerValidations');
const { EstablishmentsViewModel,
    EstablishmentsInformationsViewModel,
    EstablishmentsRegistrationViewModel,
    EstablishmentsResponsibleViewModel } = require('../../view/establishmentsView');
const bcrypt = require('bcryptjs');

module.exports =
{
    async Post(req, res) {
        try {
            const {
                ModelEstablishments,
                ModelEstablishmentsInformations,
                ModelEstablishmentsRegistration,
                ModelEstablishmentsResponsible
            } = req.body;

            //#region VALIDA MODELS
            if ((await validationEstablishments(ModelEstablishments)).erro) {
                if((await validationEstablishments(ModelEstablishments)).field){
                    return res.json({ "success": false, "erro": (await validationEstablishments(ModelEstablishments)).message, field:(await validationEstablishments(ModelEstablishments)).field });
                }else{
                    return res.json({ "success": false, "erro": (await validationEstablishments(ModelEstablishments)).message });
                };
            };

            if ((await validationEstablishments_informations(ModelEstablishmentsInformations)).erro) {
                if((await validationEstablishments_informations(ModelEstablishmentsInformations)).field){
                    return res.json({ "success": false, "erro": (await validationEstablishments_informations(ModelEstablishmentsInformations)).message, field:(await validationEstablishments_informations(ModelEstablishmentsInformations)).field });
                }else{
                    return res.json({ "success": false, "erro": (await validationEstablishments_informations(ModelEstablishmentsInformations)).message });
                };
            };

            if ((await validationEstablishments_registration(ModelEstablishmentsRegistration)).erro) {
                if((await validationEstablishments_registration(ModelEstablishmentsRegistration)).field){
                    return res.json({ "success": false, "erro": (await validationEstablishments_registration(ModelEstablishmentsRegistration)).message, field:(await validationEstablishments_registration(ModelEstablishmentsRegistration)).field });
                }else{
                    return res.json({ "success": false, "erro": (await validationEstablishments_registration(ModelEstablishmentsRegistration)).message });
                };
            };

            if ((await validationEstablishments_responsible(ModelEstablishmentsResponsible)).erro) {
                if((await validationEstablishments_responsible(ModelEstablishmentsResponsible)).field){
                    return res.json({ "success": false, "erro": (await validationEstablishments_responsible(ModelEstablishmentsResponsible)).message, field:(await validationEstablishments_responsible(ModelEstablishmentsResponsible)).field });
                }else{
                    return res.json({ "success": false, "erro": (await validationEstablishments_responsible(ModelEstablishmentsResponsible)).message });
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
                return res.json({ "success": false, "erro": "Este CNPJ já esta cadastrado." });
            };
            if (GetEstablishmentsRegistration.length > 0) {
                return res.json({ "success": false, "erro": "Este EMAIL já esta cadastrado." });
            };
            const Establishments = await EstablishmentsViewModel.create(ModelEstablishments);
            await EstablishmentsResponsibleViewModel.create(ModelEstablishmentsResponsible);
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