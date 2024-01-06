const Sequelize = require('sequelize');
module.exports = log_login_user = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    longitude: {
        type: Sequelize.STRING,
        allowNull: true
    },
    latitude: {
        type: Sequelize.STRING,
        allowNull: false
    },
    platform: {
        type: Sequelize.STRING,
        allowNull: false
    }
};