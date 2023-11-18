const business = require('./user-business');
const Boom = require('@hapi/boom');

const findOne = async (request, h) => {
    const { id } = request.params;
    try {
        const result = await business.findOne(parseInt(id));
        return h.response(result).code(200);
    } catch (error) {
        return Boom.notFound('User not found');
    }
}

const findAll = async (_, h) => {
    try {
        const result = await business.findAll();
        return h.response(result).code(200);
    } catch (error) {
        error = Boom.notAcceptable();
        throw error;
    }
}

const create = async (request, h) => {
    const data = request.payload;
    try {
        const user = await business.create(data);
        return h.response(user).code(201)
    } catch (error) {
        error = Boom.notAcceptable();
        throw error;
    }
}
const update = async (request, h) => {
    const data = request.payload;
    const { id } = request.params;
    try {
        const user = await business.update(data, id);
        return h.response(user).code(200);
    } catch (error) {
        error = Boom.notFound('User not found');
        throw error;
    }

}
const destroy = async (request, h) => {
    const { id } = request.params;
    try {
        const result = await business.destroy(id);
        return h.response(result).code(204)
    } catch (error) {
        error = Boom.notFound('User not found');
        throw error;
    }
}

module.exports = {
    create,
    update,
    destroy,
    findOne,
    findAll,
}