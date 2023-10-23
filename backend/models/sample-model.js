const Sequelize = require('sequelize');
const sequelize = new Sequelize();

const Sample = sequelize.define('sample', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    temperature: Sequelize.DECIMAL,
    ph: Sequelize.DECIMAL,
    userId: {
        type: Sequelize.UUID,

    },

    
});