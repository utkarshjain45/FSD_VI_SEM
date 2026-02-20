// const express = require('express');
// const os = require('os');
// const cors = require('cors');

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// app.get('/total-memory', (req, res) => {
//     const totalMem = os.totalmem(); 
//     const totalMemGB = (totalMem / (1024 * 1024 * 1024)).toFixed(2);
//     res.json({ 
//         title: "Total Memory", 
//         data: `${totalMemGB} GB` 
//     });
// });

// app.get('/free-memory', (req, res) => {
//     const freeMem = os.freemem(); 
//     const freeMemGB = (freeMem / (1024 * 1024 * 1024)).toFixed(2);
//     res.json({ 
//         title: "Free Memory", 
//         data: `${freeMemGB} GB` 
//     });
// });

// app.get('/user-info', (req, res) => {
//     const userInfo = os.userInfo();
//     res.json({ 
//         title: "User Info", 
//         data: userInfo 
//     });
// });

// app.get('/cpu-arch', (req, res) => {
//     const architecture = os.arch();
//     res.json({ 
//         title: "CPU Architecture", 
//         data: architecture 
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('./a.html');
const myServer = http.createServer((req, res) => {
    res.end(home);
});

myServer.listen(8000, () => console.log("Server is Running"));