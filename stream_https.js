const http = require('http');
const { createReadStream } = require('fs');

const server = http.createServer((req, res) => {
    const stream = createReadStream('./data/bigFile.txt', {
        encoding: 'utf-8'
    })

    stream.on('data', (chunk) => {
        stream.pipe(res.end(chunk))
    })
})

server.listen(8090);