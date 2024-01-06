const { PricesViewModel } = require('../../view/categoriesView');

module.exports =
{
    async Get(req, res) {
        try {
            const Prices = await PricesViewModel.findAll();
            if (Prices.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': Prices });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {

        try {
            const { id } = req.params;
            const Prices = await PricesViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': Prices });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const Prices = await PricesViewModel.create(req.body);
            return res.json({ 'success': true, 'data': Prices });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { price, measure, name, description, active } = req.body;
            const Prices = await PricesViewModel.findByPk(id);
            if (Prices) {
                Prices.price = price;
                Prices.measure = measure;
                Prices.name = name;
                Prices.number = number;
                Prices.description = description;
                Prices.active = active;
                await Prices.save();
            };
            return res.json({ 'success': true, 'data': Prices });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const Prices = await PricesViewModel.findByPk(id);
            await Prices.destroy();
            return res.json({ 'success': true, 'data': Prices });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};