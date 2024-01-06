const { CategoriesViewModel } = require('../../view/categoriesView');

module.exports =
{
    async Get(req, res) {
        try {
            const Categories = await CategoriesViewModel.findAll();
            if (Categories.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': Categories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const Categories = await CategoriesViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': Categories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const Categories = await CategoriesViewModel.create(req.body);
            return res.json({ 'success': true, 'data': Categories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { icon, image, name, description, active } = req.body;
            const Categories = await CategoriesViewModel.findByPk(id);
            if (Categories) {
                Categories.icon = icon;
                Categories.image = image;
                Categories.name = name;
                Categories.description = description;
                Categories.active = active;
                await Categories.save();
            };
            return res.json({ 'success': true, 'data': Categories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const Categories = await CategoriesViewModel.findByPk(id);
            await Categories.destroy();
            return res.json({ 'success': true, 'data': Categories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};