var server = require('http').createServer();
server.on('request'), function(req, res) {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.write('Hello\n');
  res.end();
}

server.listen(51200);
console.log('Server listening on port 51200');
