const schema = require('../auth/auth-schema');
const controller = require('../auth/auth-controller');

const plugin = {
    name: 'auth-v1-routes',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: 'POST',
                path: '/auth/register',
                options: {
                    tags: ['api'],
                    description: 'register user',
                    handler: controller.register,
                    validate: schema.register,
                }
            },
            {
                method: 'POST',
                path: '/auth',
                options: {
                    tags: ['api'],
                    description: 'login user',
                    handler: controller.login,
                    validate: schema.login,
                }
            }
        ])
    }
};

module.exports = plugin;