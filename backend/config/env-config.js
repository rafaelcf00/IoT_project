const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const initEnv = () => {
    process.env.ENVIRONMENT = process.env.ENVIRONMENT || 'development';

    const envPath = path.join(__dirname, '/../.env.' + process.env.ENVIRONMENT);
    try {
        fs.statSync(envPath);
        dotenv.config({path: envPath});
    } catch (error) {
        console.log(error);
        throw new Error(envPath + 'Error to load env');
    }
};

initEnv();

const allEnv = {
    host: process.env.HOST,
    port: process.env.PORT,
    jwt: {
        enable: process.env.JWT_ENABLE || true,
        secret: process.env.JWT_SECRET || '*2f,DH03%M1q',
    },
};

module.exports = allEnv;