const sampleRepository = require("./sample-repository");

const findOne = async (id) => {
  return sampleRepository.findOneSample(id);
};

const findAll = async (page, offset) => {
  return sampleRepository.findAllSample(page, offset);
};

const create = async (data) => {
  return sampleRepository.createSample(data);
};
const findDate = async (page, offset, initial, final) => {
  return sampleRepository.findDate(page, offset, initial, final);
};

module.exports = {
  create,
  findAll,
  findOne,
  findDate,
};
