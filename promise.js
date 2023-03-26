const { readFile } = require("fs/promises");

const result = async () => {
  const textFile = await readFile("./data/textfile.txt", 'utf-8');
  console.log("[TEXT_FILE]", textFile);
};

result();

// const getTextFile = (pathfile) => {
//   return new Promise((resolve, reject) => {
//     readFile(pathfile, "utf-8", (err, data) => {
//       if (err) throw Error("file not found", reject(err));
//       resolve(data);
//     });
//   });
// };

// getTextFile("./data/textfil.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log((error)))


