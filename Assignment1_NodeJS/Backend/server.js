const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allow requests from your React frontend
app.use(express.json());

// 1. Total Memory Route
app.get('/total-memory', (req, res) => {
    const totalMem = os.totalmem(); // Returns bytes
    // Convert to GB for readability, or send raw bytes
    const totalMemGB = (totalMem / (1024 * 1024 * 1024)).toFixed(2);
    res.json({ 
        title: "Total Memory", 
        data: `${totalMemGB} GB` 
    });
});

// 2. Free Memory Route
app.get('/free-memory', (req, res) => {
    const freeMem = os.freemem(); // Returns bytes
    const freeMemGB = (freeMem / (1024 * 1024 * 1024)).toFixed(2);
    res.json({ 
        title: "Free Memory", 
        data: `${freeMemGB} GB` 
    });
});

// 3. User Info Route
app.get('/user-info', (req, res) => {
    const userInfo = os.userInfo();
    res.json({ 
        title: "User Info", 
        data: userInfo 
    });
});

// 4. CPU Architecture Route
app.get('/cpu-arch', (req, res) => {
    const architecture = os.arch();
    res.json({ 
        title: "CPU Architecture", 
        data: architecture 
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});