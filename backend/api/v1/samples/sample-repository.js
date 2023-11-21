const {Sample, Sequelize} = require('../../../models/index');
const Op = Sequelize.Op;
const Boom = require('@hapi/boom');

const findOneSample = async (id) => {
    try {
        const sample = await Sample.findOne({
            where: {
                id: id
            }
        });
        if(!sample && sample === null) {
            return Boom.notFound('Sample not found');
        };

        return sample;
    } catch (error) {
        error = Boom.notImplemented();
        throw error;
    }
};

const findAllSample = async (page, pageSize) => {
    const offset = (page - 1) * pageSize;
    try {
        const samples = await Sample.findAll({
            limit: pageSize ? pageSize : null,
            offset: offset ? offset : null,
            index: 'id'
        });
        return samples;
    } catch (error) {
        error = Boom.notAcceptable();
        throw error;
    }
}

const createSample = async (data) => {
    try {
        const sampleData = await Sample.create(data);
        return sampleData;
    } catch (error) {
        error = Boom.notAcceptable();
        throw error;
    }
}

const findDate = async (initial, final) => {
    try {
        const samples = await Sample.findAll({
            where: {
                createdAt: {
                    [Op.between]: [initial, final]
                }
            }
        });
        return samples
    } catch (error) {
        error = Boom.notAcceptable();
        throw error;
    }
}

module.exports = {
    findDate,
    createSample,
    findAllSample,
    findOneSample,
}