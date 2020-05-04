const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  pingInterval: 10000
});
app.use(express.static('public'))
// Front-end
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/backend', function (req, res) {
  res.sendFile(__dirname + '/backend.html');
})

http.listen(process.env.PORT || 3000, () => {
  console.log('server is running')
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('server', (info) => {
    console.log(info)
    let p1name = info.client[0].value,
    p1team = info.client[1].value,
    p1country = info.client[2].value,
    p1score = info.client[3].value,
    p2name = info.client[4].value,
    p2team = info.client[5].value,
    p2country = info.client[6].value,
    p2score = info.client[7].value,
    round = info.client[8].value,
    commentator1 = info.client[9].value,
    commentator2 = info.client[10].value,
    commentator3 = info.client[11].value,
    game = info.client[12].value;

    io.emit('update', {
      'p1name' : p1name,
      'p1team' : p1team,
      'p1score' : p1score,
      'p1country' : p1country,
      'round' : round,
      'p2score' : p2score,
      'p2team' : p2team,
      'p2name' : p2name,
      'p2country' : p2country,
      'commentator1' : commentator1,
      'commentator2' : commentator2,
      'commentator3' : commentator3,
      'game' : game
    });
  })
});