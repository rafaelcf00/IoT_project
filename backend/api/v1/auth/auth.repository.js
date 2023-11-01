const { User, Sequelize } = require('../../../models/index');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');
const config = require('../../../config/env-config');
const tokenGenerator = require('../../../config/token-generation');

const register = async (data) => {
    try {
        const user = await User.create(data);
        return user;
    } catch (error) {
        throw new Error(error)
    }
};

const findUser = async (email) => {
    try {
        const data = await User.findOne({
            where: {
                email: email,
            }
        });
        return data;
    } catch (error) {
        throw new Error(error)
    }
};

const login = async (email, password) => {
    const { dataValues } = await findUser(email);
    const secret = config.jwt.secret;

    try {
        if (!dataValues) {
            console.log('Missing authentication');
        }
        if (password === dataValues.password) {
            const token = tokenGenerator(secret);
            return {
                ...dataValues,
                token: token
            }
        }

    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    login,
    register,
}