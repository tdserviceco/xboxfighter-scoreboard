let app = require('express')();
let server = require('http').Server(app)
let io = require('socket.io').listen(server);

server.listen(process.env.PORT || 3000);
console.log("Server running....");

// Front-end
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/config/backend', function(req, res) {
  res.sendFile(__dirname + '/backend.html');
})

io.on('connection', (socket) => {
  console.log('Someone entered the site');
  socket.emit('database', { server: 'stuff'});
  socket.on('server', (data) => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('Someone closed a tab');
  })
});
