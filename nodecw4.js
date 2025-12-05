const http = require("http");

const server = http.createServer((req, res) => {
    
    console.log("Requested URL:", req.url, "| Method:", req.method);

    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to ABC College!");
    }
    
    else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About ABC College</h1>");
    }
    
    else {
        res.statusCode = 404;
        res.statusMessage = "Not Found";
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

server.listen(8080, () => {
    console.log("Server is running at http://localhost:8080");
});