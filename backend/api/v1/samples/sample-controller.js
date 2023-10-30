const business = require('./sample-business');

const findOne = async (request, h) => {
    const { id } = request.params;
    try {
        const result = await business.findOne(parseInt(id));
        return h.response(result).code(200);
    } catch (error) {
        throw new Error(error)
    }
}

const findAll = async (_, h) => {
    try {
        const result = await business.findAll();
        return h.response(result).code(200);
    } catch (error) {
        throw new Error(error);
    }
}

const create = async (request, h) => {
    const data = request.payload;
    console.log(data);
    const userId = 4;
    try {
        const sample = await business.create(data);
        return h.response(sample).code(201)
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    findOne,
    findAll,
    create,
}