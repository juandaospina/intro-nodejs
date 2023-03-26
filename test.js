const { readFileSync } = require('fs');
const util = require('util');

const promise = util.promisify(readFileSync('./data/textfile.txt', 'utf-8'));

console.log(promise)