const fs = require("fs");

// fs.writeFileSync("./abes.txt", "Hii ABES College!!")
// const res = fs.readFileSync("./abes.txt", "utf-8")
// console.log(res)

// fs.writeFile("./abes.txt", "We are Coding", () => {})
    // fs.readFile("./abes.txt", "utf-8", (err, result) => {
        //     if(err){
            //         console.log("Error:", err);
            //     }
            //     else{
                //         console.log(result);
                //     }
                // });
                
// fs.writeFileSync("./a.txt", "This is A")
// const res = fs.readFileSync("./a.txt", "utf-8")
// console.log(res)

// fs.writeFile("./b.txt", "This is B", () => {})
// fs.readFile("./b.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error:", err);
//     }
//     else{
//         console.log(result);
//     }
// });
// fs.readFile("./b.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error:", err);
//     }
//     else{
//         console.log(result);
//     }
// });


// fs.appendFileSync("./abes.txt", ` and PHD`)

// fs.appendFile("./abes.txt", ` Honours`, () => {});

// fs.cpSync("./abes.txt", "./abes-copy.txt");

// fs.cp("./abes.txt", "./abes-copy.txt", (err) => {
//     console.log(err);
// });

// fs.unlinkSync("./abes.txt")

// fs.unlink("./abes.txt", (err) => {
//     if(err){
//         console.log("Error:", err);
//     }
//     else{
//         console.log("File Deleted");
//     }
// });

const os = require('os');

console.log("System Platform", os.platform())
console.log("User Info", os.userInfo())
console.log("CPU", os.arch())
console.log("Free Memory", os.freemem())
console.log("Total Memory", os.totalmem())
console.log("UpTime", os.uptime())
console.log("UpTime", os.homedir())
console.log("UpTime", os.hostname())