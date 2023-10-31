// Create web server
// 1. create a web server
// 2. handle requests
// 3. return a response
// 4. listen on a port
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

// create a web server
const server = http.createServer((req, res) => {
    // handle requests
    const path = url.parse(req.url, true);
    const filename = `.${path.pathname}.json`;
    console.log(filename);
    // return a response
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(data);
        return res.end();
    });
});

// listen on a port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});