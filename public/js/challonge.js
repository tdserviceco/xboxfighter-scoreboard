const socket = io.connect('http://localhost:3000/');
// const socket = io.connect('https://xboxfighter-scoreboard.herokuapp.com/');
$('form').on('submit', function (e) {
  e.preventDefault();
  let list = $(this).serializeArray();
  socket.emit('challonge', { url: list[0].value });

  socket.on('challonge-url', (data) => {
    console.log(data)
    $('.xbf').attr('src', 'http://challonge.com/' + data.challonge.url + '/module?scale_to_fit=1');
  })

});