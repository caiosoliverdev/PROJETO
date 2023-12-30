const Sequelize = require('sequelize');
module.exports = establishments_responsible =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    responsible_name: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    responsible_phone: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    responsible_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    document: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
};