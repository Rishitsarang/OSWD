const http = require('http');

http.createServer((req, res) => {
  res.write('Server is running...');
  res.end();
}).listen(3000, () => {
  console.log('Server listening on port 3000');
});
