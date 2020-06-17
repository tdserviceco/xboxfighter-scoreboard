$(document).ready(function () {
  console.log('challonge')
  // const socket = io.connect('http://localhost:3000/');
  const socket = io.connect('https://xboxfighter-scoreboard.herokuapp.com/');
  $('form').on('submit', function (e) {
    e.preventDefault();
    let list = $(this).serializeArray();
    socket.emit('challonge', { url: list[0].value });
  });
})