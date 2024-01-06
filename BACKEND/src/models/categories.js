const Sequelize = require('sequelize');
module.exports = categories =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    icon: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
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