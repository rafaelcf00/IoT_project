const Boom = require('@hapi/boom');
const business = require('./sample-business');

const findOne = async (request, h) => {
    const { id } = request.params;
    try {
        const result = await business.findOne(parseInt(id));
        return h.response(result).code(200);
    } catch (error) {
        return Boom.notFound('Sample not found');
    }
}

const findAll = async (request, h) => {
    const {page, offset} = request.query;
    try {
        const result = await business.findAll(page, offset);
        return h.response(result).code(200);
    } catch (error) {
        return h.response(error).code(500);
    }
}

const create = async (request, h) => {
    const data = request.payload;
    const { id } = request.params;
    let sample = {
        ...data,
        userId: parseInt(id)
    }
    try {
        const res = await business.create(sample);
        return h.response(res).code(201)
    } catch (error) {
        return h.response(error).code(500)
    }
}

module.exports = {
    findOne,
    findAll,
    create,
}