let p1name = $('.p1 > .gamertag'),
  p2name = $('.p2 > .gamertag'),
  p1team = $('.p1 > .team'),
  p2team = $('.p2 > .team'),
  p1country = $('.p1 > .country'),
  p2country = $('.p2 > .country'),
  p1score = $('.p1 > .score'),
  p2score = $('.p2 > .score'),
  round = $('.round')


$(document).ready(function () {
  const socket = io.connect('http://localhost:3000');
  // const socket = io.connect('https://xboxfighter-scoreboard.herokuapp.com');
  socket.on('template', (data) => {
    // Display what template we are using
    if (data.template.value === 'sf') {
      $('body').removeClass('shamsho dbz sc');
      $('body').addClass('sf');
    }
    if (data.template.value === 'shamsho') {
      $('body').removeClass('sf dbz sc');
      $('body').addClass('shamsho');
    }

    if (data.template.value === 'dbz') {
      $('body').removeClass('sf shamsho sc');
      $('body').addClass('dbz');
    }

    if (data.template.value === 'sc') {
      $('body').removeClass('sf shamsho dbz');
      $('body').addClass('sc');
    }

  })
  socket.on('layout', (data) => {
    console.log(data)
    // Check update for Player 1
    if ($('#p1flag').attr('src') !== './flags/' + data.layout.p1country.value + '.png') {
      p1country.html('<img id="p1flag" src="./flags/' + data.layout.p1country.value + '.png" alt="country flag" />');
    }

    if (p1name.html() !== data.layout.p1name.value) {
      p1name.html('<h3>' + data.layout.p1name.value + '</h3>')
    }

    if (p1team.html() !== data.layout.p1team.value) {
      if ($.isEmptyObject(data.layout.p1team.value)) {
        $('.p1 > .team').removeClass('sponsor');
        p1team.html('');
      }
      else {
        p1team.html('<span>' + data.layout.p1team.value + '</span>').addClass('sponsor');
      }
    }

    if (p1score.html() !== data.layout.p1score.value) {
      p1score.html('<span>' + data.layout.p1score.value + '</span>')
    }

    // Check update for Player 2
    if ($('#p2flag').attr('src') !== './flags/' + data.layout.p2country.value + '.png') {
      p2country.html('<img id="p2flag" src="./flags/' + data.layout.p2country.value + '.png" alt="country flag" />');
    }

    if (p2name.html() !== data.layout.p2name.value) {
      p2name.html('<h3>' + data.layout.p2name.value + '</h3>')
    }

    if (p2team.html() !== data.layout.p2team.value) {
      if ($.isEmptyObject(data.layout.p2team.value)) {
        $('.p2 > .team').removeClass('sponsor');
        p2team.html('');
      }
      else {
        p2team.html('<span>' + data.layout.p2team.value + '</span>').addClass('sponsor');
      }
    }

    if (p2score.html() !== data.layout.p2score.value) {
      p2score.html('<span>' + data.layout.p2score.value + '</span>')
    }

    if (round.html() !== data.layout.round.value) {
      round.html('<span>' + data.layout.round.value + '</span>')
    }
  })
})