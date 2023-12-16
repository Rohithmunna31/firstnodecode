
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');

    // Check the URL and provide different responses
    if (req.url === '/home') {
        res.write('<h1>Welcome home</h1>');
    } else if (req.url === '/about') {
        res.write('<h1>Welcome to About Us page</h1>');
    } else if (req.url === '/node') {
        res.write('<h1>Welcome to my Node Js project</h1>');
    } else {
        res.write('<h1>Page not found</h1>');
    }

    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

