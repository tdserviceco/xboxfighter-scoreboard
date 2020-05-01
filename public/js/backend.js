$(document).ready(function () {
  console.log('Backend')

  $('form').submit(function (e) {
    e.preventDefault()
    let value;
    value = $(this).serializeArray();
    console.log("array data: ", value)

    // const socket = io.connect('http://localhost');
    const socket = io.connect('https://xboxfighter-scoreboard.herokuapp.com');
    socket.emit('server', { client: value });
  })


})