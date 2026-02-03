const fs = require("fs");

// fs.writeFileSync("./abes.txt", "Hii ABES College!!")
// const res = fs.readFileSync("./abes.txt", "utf-8")
// console.log(res)

// fs.writeFile("./abes.txt", "We are Coding", () => {})
fs.readFile("./abes.txt", "utf-8", (err, result) => {
    if(err){
        console.log("Error:", err);
    }
    else{
        console.log(result);
    }
});