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
                    auth: 'jwt',
                    tags: ['api'],
                    description: 'find all samples',
                    handler: controller.findAll,
                }
            },
            {
                method: 'GET',
                path: '/samples/{id}',
                options: {
                    auth: 'jwt',
                    tags: ['api'],
                    description: 'find one sample',
                    handler: controller.findOne,
                }
            },
            {
                method: 'POST',
                path: '/samples/{id}',
                options: {
                    auth: 'jwt',
                    tags: ['api'],
                    description: 'create a sample',
                    handler: controller.create,
                    // validate: schema.postSample,
                }
            },
        ])
    }
};

module.exports = plugin;