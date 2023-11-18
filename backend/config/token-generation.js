const jwt = require('jsonwebtoken');

const tokenGenerator = (key, email) => {
    const payload = {key, email};
    const options = {
        expiresIn: '7d'
    };

    const token = jwt.sign(payload, key, options);
    return token;
};

module.exports = tokenGenerator;