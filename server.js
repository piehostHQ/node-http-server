const http = require("http");

const server = http.createServer((req, res) => {
    res.end(("Hello from me"))
})

server.listen(5000, "localhost", () => {
    console.log('server is running on port 5000');
})