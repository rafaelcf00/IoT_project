const business = require('./auth-business');

const login = async (request, h) => {
    const {email, password} = request.payload;
    try {
        const user = await business.login(email,password)
        return h.response(user).code(200);
    } catch (error) {
        return h.response(error).code(500);
    }
}
const register = async (request, h) => {
    const data = request.payload;

    try {
        const user = await business.register(data);
        return h.response(user).code(201);
    } catch (error) {
        return h.response(error).code(500);
    }
}


module.exports = {
    login,
    register
}