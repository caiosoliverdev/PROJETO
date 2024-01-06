const Sequelize = require('sequelize');
module.exports = prices =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    measure: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
};