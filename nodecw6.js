const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('pageViewed', function(page) {
    console.log("Page viewed: " + page);
});

const server = http.createServer(function(req, res) {

    let pageName = req.url.substring(1);


    if (pageName === "") {
        pageName = "home";
    }

    const filePath = pageName + ".html";

    fs.readFile(filePath, function(err, data) {
        if (err) {
        
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>404 - Page Not Found</h1>");

            console.log("Page not found: " + filePath);
        } else {
            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);

            myEmitter.emit('pageViewed', filePath);
        }
    });

});

server.listen(3000, function() {
    console.log("Server running at http://localhost:3000/");
});