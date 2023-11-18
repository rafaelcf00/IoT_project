const { server, plugins } = require('./server.js');
const preResponse = require('./api/middlewares/exception-middleware.js')
server.ext('onPreResponse', preResponse); 

(async () => {
    await server.register(plugins);
    await server.start();

    console.log('server started ' + server.info.uri);
})();