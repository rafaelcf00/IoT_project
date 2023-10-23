const jwt = require('jsonwebtoken');
const config = require('./env-config.js');

const tokenGenerator = (key) => {
    const payload = {key};
    const options = {
        expiresIn: '7d',
    };

    const token = jwt.sign(payload, key, options);
    return token;
};

const secret = config.jwt.secret;

tokenGenerator(secret);

module.exports = tokenGenerator;