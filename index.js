const express = require("express");
const spdy = require("spdy");
const fs = require("fs");

const PORT = 8000;
const CERT_DIR = `${__dirname}/`;

const app = express();

app.get("/", (_, res) => {
    res.send("hello world");
});

const server = spdy.createServer(
    {
        key: fs.readFileSync(`${CERT_DIR}/server.key`),
        cert: fs.readFileSync(`${CERT_DIR}/server.cert`),
    },
    app
);

server.listen(PORT, '0.0.0.0', () => {
    console.log(`App listening on port ${PORT}`);
    console.log("SSL Enabled");
});
