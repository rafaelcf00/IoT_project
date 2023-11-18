const { User, Sample, Sequelize } = require('../../../models/index');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const findOneUser = async (id) => {
    try {
        const user = await User.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
            include: [{
                model: Sample,
            }]
        });
        if(!user) Boom.badRequest('User not found');

        return user;
    } catch (error) {
        error = Boom.badRequest();
        throw error;
    }
};

const findAllUser = async () => {
    try {
        const data = await User.findAll({
            attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
        })
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

const createUser = async (user) => {
    const hashPassword = bcrypt.hashSync(user.password, salt);
    const newData = {
        name: user.name,
        email: user.email,
        password: hashPassword
    };
    try {
        const data = await User.create(newData);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}

const updateUser = async (id, user) => {
    const hashPassword = bcrypt.hashSync(user.password, salt);
    const newData = {
        name: user.name,
        email: user.email,
        password: hashPassword
    };
    try {
        await User.update({ ...newData }, {
            where: {
                id: id
            }
        }).then((data) => {
            return data;
        });
    } catch (error) {
        throw new Error(error)
    }
}

const deleteUser = async (id) => {
    try {
        await User.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    findAllUser,
    findOneUser,
}