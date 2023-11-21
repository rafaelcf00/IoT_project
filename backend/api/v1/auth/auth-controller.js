const business = require('./auth-business');
const Boom = require('@hapi/boom');

const login = async (request, h) => {
    const {email, password} = request.payload;
    try {
        const user = await business.login(email,password)
        return h.response(user).code(200);
    } catch (error) {
        return Boom.badRequest('Invalid user email or password');
    }
}
const register = async (request, h) => {
    const data = request.payload;

    try {
        const user = await business.register(data);
        return h.response(user).code(201);
    } catch (error) {
        error = Boom.notAcceptable();
        throw error;
    }
}


module.exports = {
    login,
    register
}