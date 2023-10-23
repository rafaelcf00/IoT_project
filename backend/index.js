const { server, plugins } = require('./server.js');

(async () => {
    await server.register(plugins);
    await server.start();

    console.log('server started ' + server.info.uri);
})();
