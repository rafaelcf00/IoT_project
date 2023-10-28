const Hapi = require('@hapi/hapi');
const Insert = require('@hapi/insert');
const Vision = require('@hapi/vision');
const routes = require('./config/routes.js');
const swaggerPlugin = require('hapi-swagger');
const config = require('./config/env-config.js');

const server = Hapi.server({
    port: config.port,
    host: config.host,
});

const swaggerPlugin = [
    Insert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            documentationPath: '/docs',
            schemas: ['https', 'https'],
            info: {
                title: "Api Arduino",
                version: 1.0
            }
        }
    }
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