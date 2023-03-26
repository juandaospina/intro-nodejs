const http = require("http");

const server = http.createServer((req, res) => {
    console.log("[URL]", req.url)
    if(req.url == '/courses') {
        return res.end("<h3>Página de cursos</h3>")
    }
    if(req.url == '/') {
        return res.end("<h3>Página de home</h3>")
    }
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({
        data: "Hello World!",
        users: []
    }))
})
server.listen(3000);