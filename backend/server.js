const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const hapiJWT = require('hapi-auth-jwt2');
const HapiSwagger = require('hapi-swagger');
const routes = require('./config/routes.js');
const config = require('./config/env-config.js');

const server = Hapi.server({
    port: config.port,
    host: config.host,
});

const swaggerPlugin = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            documentationPath: '/docs',
            info: {
                title: "Api Arduino",
                version: '1.0.0'
            },
            schemes: ['http','https']
        }
    },
];

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];

const validate = async (decoded, request, h) => {
    return {
        isValid: true
    }
}

if(config.jwt.enable === 'true') {
    server.register(hapiJWT);
    server.auth.strategy('jwt', 'jwt', {
        key: config.jwt.secret,
        validate
    });
    
    server.auth.default('jwt');
}

plugins.push(...swaggerPlugin);
module.exports = {
    server,
    plugins
}