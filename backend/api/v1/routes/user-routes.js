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
                    auth: 'jwt',
                    tags: ['api'],
                    description: 'find all users',
                    handler: controller.findAll,
                }
            },
            {
                method: 'GET',
                path: '/users/{id}',
                options: {
                    auth: 'jwt',
                    tags: ['api'],
                    description: 'find one user',
                    handler: controller.findOne,
                }
            },
            {
                method: 'POST',
                path: '/users',
                options: {
                    auth: 'jwt',
                    tags: ['api'],
                    description: 'create a user',
                    handler: controller.create,
                    validate: schema.postUser,
                }
            },
            {
                method: 'PUT',
                path: '/users/{id}',
                options: {
                    auth: 'jwt',
                    tags: ['api'],
                    description: 'update a user',
                    handler: controller.update,
                    validate: schema.putUser,
                }
            },
            {
                method: 'DELETE',
                path: '/users/{id}',
                options: {
                    auth: 'jwt',
                    tags: ['api'],
                    description: 'delete a user',
                    handler: controller.destroy,
                }
            }
        ])
    }
};

module.exports = plugin;