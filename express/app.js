const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// 1. Configure storage to save files in 'uploads/' with unique names
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

// 2. Initialize Multer with storage and optional file filter
const upload = multer({ storage: storage }).single('image'); 

// 3. Define the upload route
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send(err.message); // Handle Multer errors
    }
    // File is saved, accessible via req.file
    res.send('Image uploaded successfully!');
  });
});

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));