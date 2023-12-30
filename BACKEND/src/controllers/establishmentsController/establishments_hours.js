const {} = require('../models/etiquetas');
const moment = require('moment-timezone');

module.exports =
{
    async Listar(req, res) {
                  /*
            #swagger.tags = ['Etiquetas'],
            #swagger.responses[200] = {description: 'Sucesso.'},
        */
        try {
            const Etiquetas = await ModelEtiquetas.findAll();

            if (Etiquetas.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "Não há registros cadastrados." });
            };

            return res.json({ 'sucesso': true, 'result': Etiquetas });

        } catch (erro) {
            return res.json({ "sucesso": false });
        }
    },

    async Criar(req, res) {
                /*
            #swagger.tags = ['Etiquetas'],
            #swagger.responses[200] = {description: 'Sucesso.'},
        */
        try {

            const { Titulo, Cor } = req.body;

            if (Titulo === "") {
                return res.json({ "sucesso": false, "mensagem": "Informe o Titulo referente ao registro." });
            };
            if (Cor === "") {
                return res.json({ "sucesso": false, "mensagem": "Informe a Cor referente ao registro." });
            };
           
            function Aliatorio() {
                return Math.random() * (99 - 10) + 10;
            };

            function NovoId() {
                const Data = (new Date().getTime()).toString();
                var arr = [];
                for (var i = 6; i < Data.length; i++) {
                    arr[i] = (Aliatorio() + Data.charCodeAt(i).toString(16)).slice(-4).substring(0, 20);
                }
                return arr.join("-").replace('------', '');
            };

            const Etiquetas = await ModelEtiquetas.create(
                {
                    Id: NovoId(),
                    Titulo: Titulo,
                    Cor: Cor,
                    createdAt: moment(new Date()).tz("America/Sao_Paulo").format(),
                    updatedAt: moment(new Date()).tz("America/Sao_Paulo").format()

                }
            );
            return res.json({ 'sucesso': true, 'result': Etiquetas });

        } catch (erro) {
            return res.json({ "sucesso": false });
        }
    },

    async Editar(req, res) {
                /*
            #swagger.tags = ['Etiquetas'],
            #swagger.responses[200] = {description: 'Sucesso.'},
        */
        try {

            const { Titulo, Cor } = req.body;

            if (Titulo === "") {
                return res.json({ "sucesso": false, "mensagem": "Informe o Titulo referente ao registro." });
            };
            if (Cor === "") {
                return res.json({ "sucesso": false, "mensagem": "Informe a Cor referente ao registro." });
            };
           

            const Etiquetas = await ModelEtiquetas.findByPk(req.body.Id);
            if (Etiquetas) {
                Etiquetas.Titulo = Titulo;
                Etiquetas.Cor = Cor;
                Etiquetas.updatedAt = moment(new Date()).tz("America/Sao_Paulo").format();
                await Etiquetas.save();
            }

            return res.json({ 'sucesso': true, 'result': Etiquetas });

        } catch (erro) {
            return res.json({ "sucesso": false });
        }
    },

    async ListarUm(req, res) {
                /*
            #swagger.tags = ['Etiquetas'],
            #swagger.responses[200] = {description: 'Sucesso.'},
        */
        try {
            const Etiquetas = await ModelEtiquetas.findByPk(req.body.Id);

            return res.json({ 'sucesso': true, 'result': Etiquetas });

        } catch (erro) {
            return res.json({ "sucesso": false });
        }
    },

    async Deletar(req, res) {
                /*
            #swagger.tags = ['Etiquetas'],
            #swagger.responses[200] = {description: 'Sucesso.'},
        */
        try {

            const Etiquetas = await ModelEtiquetas.findByPk(req.body.Id);
            await Etiquetas.destroy();
            return res.json({ 'sucesso': true, 'result': Etiquetas });

        } catch (erro) {
            return res.json({ "sucesso": false });
        }
    }

}