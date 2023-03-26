const { writeFile } = require('fs/promises');

const createBigFile = async () => {
    await writeFile('./data/bigFile.txt', 'My name is Juan'.repeat(100000));
}

createBigFile();