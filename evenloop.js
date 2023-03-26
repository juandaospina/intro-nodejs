
const https = require("http");

const server = https.createServer((req, res) => {
    if(req.url == '/') {
        res.write("Welcome to the server")
        return res.end();
    }
    if(req.url == '/about') {
        res.write("Welcome to the about")
        return res.end();
    }

    res.end(JSON.stringify({
        status: 200,
        message: "page not found"
    }))
})

server.listen(8000);