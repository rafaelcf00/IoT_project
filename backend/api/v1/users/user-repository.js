const { User, Sample, Sequelize } = require('../../../models/index');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const findOneUser = async (id) => {
    try {
        const user = await User.findOne({
            where: {
                id: id
            },
            include: [{
                model: Sample,
            }]
        })
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

const findAllUser = async () => {
    try {
        const data = await User.findAll()
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