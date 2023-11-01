const {Sample, Sequelize} = require('../../../models/index');
const Op = Sequelize.Op;

const findOneSample = async (id) => {
    try {
        const sample = await Sample.findOne({
            where: {
                id: id
            }
        });

        return sample;
    } catch (error) {
        throw new Error(error);
    }
};

const findAllSample = async () => {
    try {
        const samples = await Sample.findAll();
        return samples;
    } catch (error) {
        throw new Error(error);
    }
}

const createSample = async (data) => {
    try {
        const sampleData = await Sample.create(data);
        return sampleData;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    createSample,
    findAllSample,
    findOneSample,
}