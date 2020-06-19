$(document).ready(function () {
  // const socket = io.connect('http://localhost:3000/');
  const socket = io.connect('https://xboxfighter-scoreboard.herokuapp.com/');
  $('form').on('submit', function (e) {
    e.preventDefault();
    value = $(this).serializeArray();
    console.log("Hows the time: "+value[0].value)
    socket.emit('countdown', { time: value[0].value });
  })
})