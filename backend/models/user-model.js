const Sequelize = require('sequelize');
const sequelize = new Sequelize();

const User = sequelize.define('user', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
});

module.exports = User;