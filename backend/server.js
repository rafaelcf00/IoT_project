const Hapi = require('@hapi/hapi');
const routes = require('./config/routes.js');
const config = require('./config/env-config.js');

const server = Hapi.server({
    port: config.port,
    host: config.host,
});

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];

module.exports = {
    server,
    plugins
}