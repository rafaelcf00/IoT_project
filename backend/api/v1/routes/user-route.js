const schema = require('../users/user-schema');
const controller = require('../users/user-controller');

const plugin = {
    name: 'users-v1-routes',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: 'GET',
                path: '/users',
                options: {
                    tags: ['api'],
                    description: 'find all users',
                    handler: controller.find,
                }
            },
            {
                method: 'POST',
                path: '/users',
                options: {
                    tags: ['api'],
                    description: 'create a user',
                    handler: controller.create,
                    validate: schema.postUser,
                }
            },
            {
                method: 'PUT',
                path: '/users',
                options: {
                    tags: ['api'],
                    description: 'update a user',
                    handler: controller.update,
                    validate: schema.putUser,
                }
            },
            {
                method: 'DELETE',
                path: '/users',
                options: {
                    tags: ['api'],
                    description: 'delete a user',
                    handler: controller.delete,
                }
            }
        ])
    }
};

module.exports = plugin;