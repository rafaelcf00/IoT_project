const business = require('./user-business');

const findAll = async (_, h) => {
    try {
        const result = await business.findAll();
        return h.response(result).code(200);
    } catch (error) {
        throw new Error(error);
    }
}

const findOne = async (request, h) => {
    const { id } = request.params;
    try {
        const result = await business.findOne(parseInt(id));
        return h.response(result).code(200);
    } catch (error) {
        throw new Error(error);
    }
}

const create = async (request, h) => {
    const data = request.payload;
    try {
        const user = await business.create(data);
        return h.response(user).code(201)
    } catch (error) {
        throw new Error(error);
    }
}
const update = async (request, h) => {
    const data = request.payload;
    const { id } = request.params;
    try {
        const user = await business.update(data, id);
        return h.response(user).code(200);
    } catch (error) {
        return h.response(error).code(500);
    }

}
const destroy = async (request, h) => {
    const { id } = request.params;
    try {
        const result = await business.destroy(id);
        return h.response(result).code(204)
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    create,
    update,
    destroy,
    findOne,
    findAll,
}