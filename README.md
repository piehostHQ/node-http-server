# Node.js Dual Server Project
This project demonstrates the use of Node.js to create two separate servers:

An HTTP server running on port 5000.
A TCP server running on port 3000.
# Features
HTTP Server

Listens on localhost:5000.
Responds with a simple message: Hello from me.
# TCP Server
Listens on localhost:3000.
Logs incoming data chunks from TCP clients.
Responds to clients with an HTTP-like response header.
# Prerequisites
Ensure you have Node.js installed. You can download it from Node.js Official Website.

Installation
Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```
Install dependencies (if any):

```bash
npm install
```
Run the server:
```bash
node server.js
```
## Usage
HTTP Server
Open your browser or a tool like curl or Postman.
Navigate to: http://localhost:5000.
You should see the response:
```
Hello from me
```
TCP Server
Use a TCP client tool like telnet or netcat.
Connect to the server on port 3000:
bash
```
telnet localhost 3000
```
Send any data, and you’ll see it logged in the server console.
The server will respond with a minimal HTTP-like response:
```
HTTP/1.1 200 OK
Server: my-web-server
Content-Length: 0
```
