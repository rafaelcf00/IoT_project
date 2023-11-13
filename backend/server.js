const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const HapiCors = require('hapi-cors');
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
                version: '1.0.0',
                description: 'API for analyzing and recording ph and temperature of liquid samples in the laboratory ',
                termsOfService: 'http://swagger.io/terms/',
                license: {
                    name: 'MIT license',
                    url: 'https://opensource.org/license/mit/'
                },
            },
            schemes: ['http', 'https']
        }
    },
];

const corsPlugin = [
    {
        plugin: HapiCors,
        options: {
            origins: ['*'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            headers: ['Authorization'],
        }
    }
]

const plugins = [
    {
        plugin: routes,
        options: {
            cors: true,
            routesBaseDir: './api'
        }
    }
];

const validate = async (decoded, request, h) => {
    return {
        isValid: true, credencials: decoded,
    }
}

if (config.jwt.enable === 'true') {
    server.register(hapiJWT);
    server.auth.strategy('jwt', 'jwt', {
        key: config.jwt.secret,
        validate
    });
}

plugins.push(...swaggerPlugin);
plugins.push(...corsPlugin);
module.exports = {
    server,
    plugins
}