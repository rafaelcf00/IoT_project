const authRepository = require('./auth.repository');

const register = async (data) => {
    return authRepository.register(data);
};

const login = async (email, password) => {
    return authRepository.login(email, password);
} 

module.exports = {
    login, 
    register,
}