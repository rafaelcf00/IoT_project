const sampleRepository = require('./sample-repository');

const findOne = async (id) => {
    return sampleRepository.findOneSample(id);
};

const findAll = async (page, offset) => {
    return sampleRepository.findAllSample(page, offset);
};

const create = async (data) => {
    return sampleRepository.createSample(data);
};

module.exports = {
    create,
    findAll,
    findOne,
}