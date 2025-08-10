const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "..", "sekolah.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export sebagai handler untuk Vercel
module.exports = server;
