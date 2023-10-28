const Joi = require('joi');

const postUser = {
    payload: Joi.object({
        name: Joi.string().min(5).max(150).required(),
        email: Joi.string().max(150).email().required(),
        password: Joi.string().max(14).required(),
    }).required()
}

const putUser = {...postUser}

module.exports = {
    putUser,
    postUser,
}