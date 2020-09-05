require('dotenv').config()
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

app.get('/countdown', function (req, res) {
  res.sendFile(__dirname + '/pages/break.html')
})

app.get('/countdown-setup', function (req, res) {
  res.sendFile(__dirname + '/pages/break-setup.html')
})

app.get('/backend', function (req, res) {
  let queryUser = req.query.user;
  let queryPassword = req.query.password;

  if (queryUser === process.env.USERNAME && queryPassword ===  process.env.PWRD) {
    res.sendFile(__dirname + '/pages/backend.html');
  }
  else {
    res.sendFile(__dirname + '/pages/403.html');
  }
})

app.get('/challonge', function(req, res){
    res.sendFile(__dirname + '/pages/bracket.html');
})

app.get('/brackets', function(req, res){
  res.sendFile(__dirname + '/pages/obs-tournament-list.html');
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
    console.log(data)
    let doUpdate = data.value[0],
      p1name = data.value[1],
      p1team = data.value[2],
      p1country = data.value[3],
      p1score = data.value[4],
      p2name = data.value[5],
      p2team = data.value[6],
      p2country = data.value[7],
      p2score = data.value[8],
      round = data.value[9],
      template = data.value[10]

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
        round : round
      }
    })
  });
  
  socket.on('challonge',(url) => {
    console.log(url)
    io.emit('challonge-url', {
      challonge : url
    })
  })
  
  socket.on('countdown', (countdown) => {
    console.log(countdown)
    io.emit('countdown-time', {
      time: countdown      
    })
  })
  
});