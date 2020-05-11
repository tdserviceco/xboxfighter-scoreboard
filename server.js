const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cookie: true
});
app.use(express.static('public'))
// Front-end
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/backend', function (req, res) {
  let queryUser = req.query.user;
  let queryPassword = req.query.password;
  if (queryUser === 'xboxfighter' && queryPassword === 'xboxfighters2020') {
    res.sendFile(__dirname + '/backend.html');
  }
  else {
    res.sendFile(__dirname + '/403.html');
  }
})

http.listen(process.env.PORT || 3000, () => {
  console.log('server is running')
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', (reason) => {
    if (reason === 'io server disconnect') {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect();
    }
    console.log('user disconnected');
  });


  socket.on('server', (data) => {
    let doUpdate = data.value[0],
      p1name = data.value[1],
      p1team = data.value[2],
      p1country = data.value[3],
      p1score = data.value[4],
      p2name = data.value[5],
      p2team = data.value[6],
      p2country = data.value[7],
      p2score = data.value[8],
      // let round = data.value[9];
      commentator1 = data.value[10],
      commentator2 = data.value[11],
      commentator3 = data.value[12],
      template = data.value[13];

    io.emit('template', { 'template': template })
    io.emit('layout', {
      'layout': {
        doUpdate: doUpdate,
        p1name: p1name,
        p1team: p1team,
        p1country: p1country,
        p1score: p1score,
        p2name: p2name,
        p2team: p2team,
        p2country: p2country,
        p2score: p2score,
        commentator1: commentator1,
        commentator2: commentator2,
        commentator3: commentator3
      }
    })
  });
});