const { createReadStream } = require('fs');

const stream = createReadStream('./data/bigFile.tx', { encoding: 'utf-8'})

stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('close', () => {
    console.log('File readed')
})

stream.on('error', (error) => {
    console.log(error)
})



