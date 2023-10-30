const { User, Sequelize } = require('../../../models/index');
const Op = Sequelize.Op;

const findAllUser = async () => {
    try {
        const data = await User.findAll()

        return data;
    } catch (error) {
        throw new Error(error);
    }
};

const findOneUser = async (id) => {
    try {
        const data = await User.findOne({
            where: {
                id: id
            }
        })
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

const createUser = async (user) => {
    try {
        const data = await User.create(user);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}

const updateUser = async (id, user) => {
    try {
        await User.update({...user}, {
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