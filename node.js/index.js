let server = require('./src/server')
let router = require("./src/router");

server.server(router.route)