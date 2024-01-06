const Sequelize = require('sequelize');
module.exports = user =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    avatar: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    document: {
        type: Sequelize.STRING,
        allowNull: true
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
};