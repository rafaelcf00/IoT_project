const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const routes = require('./config/routes.js');
const HapiSwagger = require('hapi-swagger');
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
]

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];

plugins.push(...swaggerPlugin);
module.exports = {
    server,
    plugins
}