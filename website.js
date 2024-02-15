const { Console } = require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>This code is made with Node.js by ABHII </h1><p>Hey type "/hello" after address to enter on page!</p>');
    } else if (req.url === '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    } else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1><p>Hey, this page was not found on this server</p>');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
