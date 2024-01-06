const { ProductsImageViewModel } = require('../../view/categoriesView');

module.exports =
{
    async Get(req, res) {
        try {
            const ProductsImage = await ProductsImageViewModel.findAll();
            if (ProductsImage.length === 0) {
                return res.json({ "sucesso": false, "erro": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': ProductsImage });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const ProductsImage = await ProductsImageViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': ProductsImage });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const ProductsImage = await ProductsImageViewModel.create(req.body);
            return res.json({ 'success': true, 'data': ProductsImage });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { image, icon, url, active } = req.body;
            const ProductsImage = await ProductsImageViewModel.findByPk(id);
            if (ProductsImage) {
                ProductsImage.image = image;
                ProductsImage.icon = icon;
                ProductsImage.url = url;
                ProductsImage.active = active;
                await ProductsImage.save();
            };
            return res.json({ 'success': true, 'data': ProductsImage });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const ProductsImage = await ProductsImageViewModel.findByPk(id);
            await ProductsImage.destroy();
            return res.json({ 'success': true, 'data': ProductsImage });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};