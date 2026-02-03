const http = require('http');
const fs = require('fs');
const port = 8000;


const server = http.createServer((req, res) => {
    const url = req.url;
    
    if(url == "/"){
        res.end("ABES Engineering College");
    }
    else if (url == '/image') {
        const imagePath = 'abes.png';
        res.writeHead(200, { 'Content-Type': 'image/png' });
        fs.createReadStream(imagePath).pipe(res);
    }
    else if(url == "/about"){
        res.end("We are Student of B.Tech CSE DS(B)");
    }
    else if (url == '/contact') {
        res.end('Call Us at +91972862XXXX');
    }
    else {
        res.end("404 Page Not Found!!");
    }
});
    
server.listen(port, () => {
    console.log("Server is running");
})