const Sequelize = require('sequelize');
module.exports = establishments_registration =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    telephone_establishment: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    email_establishment: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
};