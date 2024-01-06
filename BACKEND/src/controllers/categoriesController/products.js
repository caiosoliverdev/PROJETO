const { ProductsViewModel } = require('../../view/categoriesView');

module.exports =
{
    async Get(req, res) {
        try {
            const Products = await ProductsViewModel.findAll();
            if (Products.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': Products });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const Products = await ProductsViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': Products });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const Products = await ProductsViewModel.create(req.body);
            return res.json({ 'success': true, 'data': Products });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { name, description, pizza, offer, active } = req.body;
            const Products = await ProductsViewModel.findByPk(id);
            if (Products) {
                Products.name = name;
                Products.description = description;
                Products.pizza = pizza;
                Products.offer = offer;
                Products.active = active;
                await Products.save();
            };
            return res.json({ 'success': true, 'data': Products });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const Products = await ProductsViewModel.findByPk(id);
            await Products.destroy();
            return res.json({ 'success': true, 'data': Products });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};