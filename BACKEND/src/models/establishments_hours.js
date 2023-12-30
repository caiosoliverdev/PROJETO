const Sequelize = require('sequelize');
module.exports = establishments_hours =  {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    day_of_the_week: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_end: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
};