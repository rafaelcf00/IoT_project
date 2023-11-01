const Joi = require('joi');

const login = {
    payload: Joi.object({
        email: Joi.string().max(150).email(),
        password: Joi.string().max(14),
    }).required()
};

const register = {
    payload: Joi.object({
        name: Joi.string().max(150),
        email: Joi.string().max(150).email(),
        password: Joi.string().max(14),
    }).required()
};

module.exports = {
    login,
    register
}