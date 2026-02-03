const fs = require("fs");

// fs.writeFileSync("./abes.txt", "Hii ABES College!!")
const res = fs.readFileSync("./abes.txt", "utf-8")
console.log(res)