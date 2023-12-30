const Sequelize = require('sequelize');
module.exports = establishments =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    registration_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    document: {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    road: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: true
    },
    zip_code: {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: true
    }
};