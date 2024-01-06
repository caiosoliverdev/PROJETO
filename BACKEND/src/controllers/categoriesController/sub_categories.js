const { SubCategoriesViewModel } = require('../../view/categoriesView');

module.exports =
{
    async Get(req, res) {
        try {
            const SubCategories = await SubCategoriesViewModel.findAll();
            if (SubCategories.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': SubCategories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const SubCategories = await SubCategoriesViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': SubCategories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const SubCategories = await SubCategoriesViewModel.create(req.body);
            return res.json({ 'success': true, 'data': SubCategories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { icon, image, name, description, active } = req.body;
            const SubCategories = await SubCategoriesViewModel.findByPk(id);
            if (SubCategories) {
                SubCategories.icon = icon;
                SubCategories.image = image;
                SubCategories.name = name;
                SubCategories.description = description;
                SubCategories.active = active;
                await SubCategories.save();
            };
            return res.json({ 'success': true, 'data': SubCategories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const SubCategories = await SubCategoriesViewModel.findByPk(id);
            await SubCategories.destroy();
            return res.json({ 'success': true, 'data': SubCategories });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};