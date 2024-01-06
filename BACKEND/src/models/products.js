const Sequelize = require('sequelize');
module.exports = products =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    pizza: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    offer: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
};