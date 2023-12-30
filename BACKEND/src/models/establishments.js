const Sequelize = require('sequelize');
module.exports = establishments =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    profile_photo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    photo_cover: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    company_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slogan: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    }
};