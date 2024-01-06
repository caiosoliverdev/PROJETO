const { OrdersViewModel } = require('../../view/userView');

module.exports =
{
    async Get(req, res) {
        try {
            const Orders = await OrdersViewModel.findAll();
            if (Orders.length === 0) {
                return res.json({ "sucesso": false, "mensagem": "There are no registered records." });
            };
            return res.json({ 'success': true, 'data': Orders });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async GetId(req, res) {
        try {
            const { id } = req.params;
            const Orders = await OrdersViewModel.findByPk(id);
            return res.json({ 'success': true, 'data': Orders });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Post(req, res) {
        try {
            const Orders = await OrdersViewModel.create(req.body);
            return res.json({ 'success': true, 'data': Orders });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Put(req, res) {
        try {
            const { id } = req.params;
            const { amount, payment_method, observation, change, delivery, waiting_time, status } = req.body;
            const Orders = await OrdersViewModel.findByPk(id);
            if (Orders) {
                Orders.amount = amount;
                Orders.payment_method = payment_method;
                Orders.observation = observation;
                Orders.change = change;
                Orders.delivery = delivery;
                Orders.waiting_time = waiting_time;
                Orders.status = status;
                await Orders.save();
            };
            return res.json({ 'success': true, 'data': Orders });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        };
    },

    async Delete(req, res) {
        try {
            const { id } = req.params;
            const Orders = await OrdersViewModel.findByPk(id);
            await Orders.destroy();
            return res.json({ 'success': true, 'data': Orders });
        } catch (erro) {
            return res.json({ "success": false, "erro": JSON.stringify(erro) });
        }
    }

};