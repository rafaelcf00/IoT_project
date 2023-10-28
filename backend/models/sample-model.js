const Sequelize = require('sequelize');
const sequelize = require('./model');

const Sample = sequelize.define('Sample', {
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
        references: {
            model: 'User',
            key: 'id'
        }
    },
});

module.exports = Sample