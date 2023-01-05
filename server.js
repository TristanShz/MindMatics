const app = require("./app");
const http = require("http");

const port = process.env.SERVER_PORT;

app.set("port", port);

const server = http.createServer(app);

console.log("Server listening on port " + port);

server.listen(port);
