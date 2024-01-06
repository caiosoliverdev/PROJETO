const Sequelize = require('sequelize');
module.exports = orders = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    number_order: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    amount: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    payment_method: {
        type: Sequelize.STRING,
        allowNull: false
    },
    observation: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    change: {
        ///troco
        type: Sequelize.STRING,
        allowNull: false
    },
    delivery: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    waiting_time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
};