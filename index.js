const http = require("http");
const app = require("./app");
http
    .createServer((req, res) => {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(app));
        res.end();
    })
    .listen(8000);