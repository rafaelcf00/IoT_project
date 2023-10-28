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
    port: process.env.PORT || 8080,
    jwt: {
        enable: process.env.JWT_ENABLE || true,
        secret: process.env.JWT_SECRET || '*2f,DH03%M1q',
    },
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER || "root",
    db_host: process.env.DB_HOST,
    db_pass: process.env.DB_PASSWORD,
    db_dialect: process.env.DB_DIALECT || 'mysql'
};

module.exports = allEnv;