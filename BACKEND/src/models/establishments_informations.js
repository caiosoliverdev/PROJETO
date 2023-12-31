const Sequelize = require('sequelize');
module.exports = establishments_informations =  {
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
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    road: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zip_code: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    }
};