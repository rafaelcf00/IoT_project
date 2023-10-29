const userRepository = require('./user-repository');

const findAll = async () => {
    return userRepository.findAllUser();
};

const findOne = async (id) => {
    return userRepository.findOneUser(id);
};

const create = async (user) => {
    return userRepository.createUser(user);
}

const update = async (id, user) => {
    return userRepository.updateUser(user, id);
}

const destroy = async (id) => {
    return userRepository.deleteUser(id);
}

module.exports = {
    create,
    update,
    destroy,
    findAll,
    findOne,
}