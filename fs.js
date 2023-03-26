const fs = require("fs");

const fileSyncCase = fs.readFileSync("./data/textfile.txt", {encoding: "utf-8"});

const fileNormalCase = fs.readFile("./data/readfile.txt", (error, data) => {
    // console.log({"ERROR": error, "DATA": data.toString()});
    if(error) throw error;
    console.log(data.toString());
});

console.log("[FILE_SYSTEM_SYNC]", fileSyncCase);
console.log("[FILE_SYSTEM_NORMAL]", fileNormalCase);
