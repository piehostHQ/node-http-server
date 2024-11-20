const server = net.createServer();
server.on('connection', handleConnection);
server.listen(3000);

function handleConnection(socket) {
  socket.on('data', (chunk) => {
    console.log('Received chunk:n', chunk.toString());
  });
  socket.write('HTTP/1.1 200 OKrnServer: my-web-serverrnContent-Length: 0rnrn');
}