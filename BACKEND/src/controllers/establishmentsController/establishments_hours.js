const { EstablishmentsHoursViewModel } = require('../../view/establishmentsView');

module.exports =
{
    async Get(req, res) {
        try {
            const EstablishmentsHours = await EstablishmentsHoursViewModel.findAll();
            if (EstablishmentsHours.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': EstablishmentsHours });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const EstablishmentsHours = await EstablishmentsHoursViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': EstablishmentsHours });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const EstablishmentsHours = await EstablishmentsHoursViewModel.create(req.body);
            return res.json({ 'success': true, 'data': EstablishmentsHours });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { day_of_the_week, start_time, start_end, active } = req.body;
            const EstablishmentsHours = await EstablishmentsHoursViewModel.findByPk(id);
            if (EstablishmentsHours) {
                EstablishmentsHours.day_of_the_week = day_of_the_week;
                EstablishmentsHours.start_time = start_time;
                EstablishmentsHours.start_end = start_end;
                EstablishmentsHours.active = active;
                await EstablishmentsHours.save();
            };
            return res.json({ 'success': true, 'data': EstablishmentsHours });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const EstablishmentsHours = await EstablishmentsHoursViewModel.findByPk(id);
            await EstablishmentsHours.destroy();
            return res.json({ 'success': true, 'data': EstablishmentsHours });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};