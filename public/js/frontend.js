
$(document).ready(function () {
  const socket = io.connect('http://localhost');
  // const socket = io.connect('https://xboxfighter-scoreboard.herokuapp.com');
  socket.on('update', (data) => {

    let p1country = data.p1country,
      p1name = data.p1name,
      p1team = data.p1team,
      p1score = data.p1score;

    if ($.isEmptyObject(p1country)) {
      $('.p1 > .country').html('<img src="./flags/xbox.png" />').removeClass('hide').addClass('display');
    }
    else {
      $('.p1 > .country').html('<img src="./flags/' + p1country + '.png" alt="country flag" />').removeClass('hide').addClass('display');
    }

    if ($.isEmptyObject(p1team)) {
      $('.p1 > .team').html('').removeClass('sponsor');
    }
    else {
      $('.p1 > .team').html('<span>' + p1team + '</span>').removeClass('hide').addClass('display sponsor');
    }

    if ($.isEmptyObject(p1name)) {
      $('.p1 > .gamertag').html('<span></span>').removeClass('hide').addClass('display');
    }
    else {
      $('.p1 > .gamertag').html('<span>' + p1name + '</span>').removeClass('hide').addClass('display');
    }

    if ($.isEmptyObject(p1score)) {
      $('.p1 > .score').html('<span></span>').removeClass('hide').addClass('display');
    }
    else {
      $('.p1 > .score').html('<span>' + p1score + '</span>').removeClass('hide').addClass('display');
    }

    let p2country = data.p2country,
      p2name = data.p2name,
      p2team = data.p2team,
      p2score = data.p2score;

    if ($.isEmptyObject(p2country)) {
      $('.p2 > .country').html('<img src="./flags/xbox.png" />').removeClass('hide').addClass('display');
    }
    else {
      $('.p2 > .country').html('<img src="./flags/' + p2country + '.png" alt="country flag" />').removeClass('hide').addClass('display');
    }

    if ($.isEmptyObject(p2team)) {
      $('.p2 > .team').html('').removeClass('sponsor');
    }
    else {
      $('.p2 > .team').html('<span>' + p2team + '</span>').removeClass('hide').addClass('display sponsor');
    }

    if ($.isEmptyObject(p2name)) {
      $('.p2 > .gamertag').html('<span></span>').removeClass('hide').addClass('display');
    }
    else {
      $('.p2 > .gamertag').html('<span>' + p2name + '</span>').removeClass('hide').addClass('display');
    }

    if ($.isEmptyObject(p2score)) {
      $('.p2 > .score').html('<span></span>').removeClass('hide').addClass('display');
    }
    else {
      $('.p2 > .score').html('<span>' + p2score + '</span>').removeClass('hide').addClass('display');
    }

    let round = data.round;

    if ($.isEmptyObject(round)) {
      $('.p2 > .round').html('<span></span>').removeClass('hide').addClass('display');
    }
    else {
      $('.p2 > .round').html('<span>' + round + '</span>').removeClass('hide').addClass('display');
    }

    let commentator1 = data.commentator1,
      commentator2 = data.commentator2,
      commentator3 = data.commentator3;
    if (commentator1 === 'none') {
      $('.commentators > .commentator1').empty();
    }
    else {
      $('.commentators > .commentator1').html('<span class="fas fa-microphone-alt">' + commentator1 + '</span>').removeClass('hide').addClass('display');
    }

    if (commentator2 === 'none') {
      $('.commentators > .commentator2').empty();
    }
    else {
      $('.commentators > .commentator2').html('<span class="fas fa-microphone-alt">' + commentator2 + '</span>').removeClass('hide').addClass('display');
    }

    if (commentator3 === 'none') {
      $('.commentators > .commentator3').empty();
    }
    else {
      $('.commentators > .commentator3').html('<span class="fas fa-microphone-alt">' + commentator3 + '</span>').removeClass('hide').addClass('display');
    }

    let game = data.game;
    if ($.isEmptyObject(game)) {
      return false;
    }
    else {
      $('head').empty().append('<meta charset="UTF-8">').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">').append('<title>Scoreboard</title>').append('<script src="/socket.io/socket.io.js"></script>').append('<link rel="stylesheet" href="../css/layouts/' + game + '.css">');
    }
  });
})