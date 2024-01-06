const Sequelize = require('sequelize');
module.exports = products_image =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    icon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    url: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
};