const Joi = require('joi');

const postSample = {
    payload: Joi.object({
        name: Joi.string().min(5).max(100).required(),
        temperature: Joi.number().max(6).required(),
        ph: Joi.number().max(6).required(),
        userId: Joi.number().max(6).required(),
    }).required()
};

const putSample = {...putSample};

module.exports = {
    putSample,
    postSample,
}