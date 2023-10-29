const schema = require('../samples/sample-schema');
const controller = require('../samples/sample-controller');

const plugin = {
    name: 'samples-v1-routes',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: 'GET',
                path: '/samples',
                options: {
                    tags: ['api'],
                    description: 'find all samples',
                    handler: controller.find,
                }
            },
            {
                method: 'POST',
                path: '/samples',
                options: {
                    tags: ['api'],
                    description: 'create a sample',
                    handler: controller.create,
                    validate: schema.postSample,
                }
            },
        ])
    }
};

module.exports = plugin;