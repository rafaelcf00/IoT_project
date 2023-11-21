const { User, Sequelize } = require('../../../models/index');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');
const config = require('../../../config/env-config');
const tokenGenerator = require('../../../config/token-generation');
const Boom = require('@hapi/boom');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const register = async (user) => {
    const hashPassword = bcrypt.hashSync(user.password, salt);
    const newData = {
        name: user.name,
        email: user.email,
        password: hashPassword
    };
    try {
        const user = await User.create(newData);
        return user;
    } catch (error) {
        error = Boom.notAcceptable();
        throw error;
    }
};

const findUser = async (email) => {
    try {
        const data = await User.findOne({
            where: {
                email: email,
            }
        });
        if (data) {
            return data;
        }
    } catch (error) {
        Boom.isBoom(Boom.badRequest(), 400);
    }
};

const login = async (email, password) => {
    const user = await findUser(email);
    const { dataValues } = user;
    try {
        if (!user) {
            Boom.badRequest()
        }
        await bcrypt.compare(password, dataValues.password)
        const token = tokenGenerator(dataValues.clientId, dataValues.email);
        return {
            ...dataValues,
            token: token
        }
    } catch (error) {
        error = Boom.badRequest();
        throw error;
    }
}

module.exports = {
    login,
    register,
    findUser,
}