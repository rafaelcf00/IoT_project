const Joi = require('joi');

const postUser = {
    payload: Joi.object({
        name: Joi.string().max(150),
        email: Joi.string().max(150).email(),
        password: Joi.string().max(14),
    }).required()
}

const putUser = {...postUser}

module.exports = {
    putUser,
    postUser,
}