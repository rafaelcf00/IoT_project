const Joi = require('joi');

const postSample = {
    payload: Joi.object({
        name: Joi.string().max(100),
        temperature: Joi.number().max(6),
        ph: Joi.number().max(6),
        userId: Joi.number().max(6),
    }).required()
};

module.exports = {
    postSample,
}