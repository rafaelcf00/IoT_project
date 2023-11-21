const authRepository = require('./auth.repository');

const register = async (user) => {
    return authRepository.register(user);
};

const login = async (email, password) => {
    return authRepository.login(email, password);
} 

module.exports = {
    login, 
    register,
}