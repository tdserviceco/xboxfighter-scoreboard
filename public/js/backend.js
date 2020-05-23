let update = false,
  data,
  value,
  clicks = 0,
  accept = false;

$(document).ready(function () {
  clearP1AndP2()
  swapPlace();
  // const socket = io.connect('http://localhost:3000');
  const socket = io.connect('https://xboxfighter-scoreboard.herokuapp.com');
  $('form').on('submit', function (e) {
    e.preventDefault();
    clicks++;
    if (clicks > 1) {
      update = true;
    }
    value = $(this).serializeArray();
    value.unshift(
      { name: 'update', value: update }
    );
    sendData(value)
  })

  function sendData(value) {
    socket.emit('server', { value: value });
  }

  function clearP1AndP2() {
    $('.clear-p1-p2').click(function () {
      const p1name = $('#p1name');
      const p2name = $('#p2name');
      const cloneP1name = $('#p1nameClone');
      const cloneP2name = $('#p2nameClone');
      const p1team = $('#p1team');
      const p2team = $('#p2team');
      const cloneP1team = $('#p1teamClone');
      const cloneP2team = $('#p2teamClone');
      const p1country = $('#p1country');
      const p2country = $('#p2country');
      const cloneP1country = $('#p1countryClone');
      const cloneP2country = $('#p2countryClone');
      const p1score = $('#p1score');
      const p2score = $('#p2score');
      const cloneP1score = $('#p1scoreClone');
      const cloneP2score = $('#p2scoreClone');

      p1name.val('');
      p2name.val('');
      p1team.val('');
      p2team.val('');
      p1country.val('xbox');
      p2country.val('xbox');
      p1score.val('0');
      p2score.val('0');

      // Clones

      cloneP1score.val('0')
      cloneP2score.val('0')
      cloneP1country.val('xbox');
      cloneP2country.val('xbox');
      cloneP1name.val('');
      cloneP2name.val('');
      cloneP1team.val('');
      cloneP2team.val('');
    });
  }

  function swapPlace() {

    // IF player need to switch side (p1 and p2 side) then we fix before the switch button activates

    const p1name = $('#p1name'),
      p2name = $('#p2name'),
      cloneP1name = $('#p1nameClone'),
      cloneP2name = $('#p2nameClone'),
      p1team = $('#p1team'),
      p2team = $('#p2team'),
      cloneP1team = $('#p1teamClone'),
      cloneP2team = $('#p2teamClone'),
      p1country = $('#p1country'),
      p2country = $('#p2country'),
      cloneP1country = $('#p1countryClone'),
      cloneP2country = $('#p2countryClone'),
      p1score = $('#p1score'),
      p2score = $('#p2score'),
      cloneP1score = $('#p1scoreClone'),
      cloneP2score = $('#p2scoreClone');


    // NAMES
    p1name.on('keyup', function (e) {
      cloneP2name.val(p1name.val())
    })
    p2name.on('keyup', function (e) {
      cloneP1name.val(p2name.val())
    })

    cloneP1name.on('keyup', function (e) {
      p2name.val(cloneP1name.val())
    })
    cloneP2name.on('keyup', function (e) {
      p1name.val(cloneP2name.val())
    })

    // TEAMS
    p1team.on('keyup', function (e) {
      cloneP2team.val(p1team.val())
    })

    p2team.on('keyup', function (e) {
      cloneP1team.val(p2team.val())
    })

    cloneP1team.on('keyup', function (e) {
      p2team.val(cloneP1team.val())
    })

    cloneP2team.on('keyup', function (e) {
      p1team.val(cloneP2team.val())
    })

    // COUNTRIES

    p1country.on('change', function (e) {
      cloneP2country.val(p1country.val())
    })

    p2country.on('change', function (e) {
      cloneP1country.val(p2country.val())
    })

    cloneP1country.on('change', function (e) {
      p2country.val(cloneP1country.val())
    })

    cloneP2country.on('change', function (e) {
      p1country.val(cloneP2country.val())
    })

    // SCORES 

    p1score.on('keyup', function(e) {
      cloneP2score.val(p1score.val())
    })

    p2score.on('keyup', function(e) {
      cloneP1score.val(p2score.val())
    })

    cloneP1score.on('keyup', function(e) {
      p2score.val(cloneP1score.val())
    })

    cloneP2score.on('keyup', function(e) {
      p1score.val(cloneP2score.val())
    })


    $('.swap').click(function () {

      // P1 & P2 name field
      p1name.prop('disabled', (i, v) => !v)
      cloneP1name.prop('disabled', (i, v) => !v);
      p2name.prop('disabled', (i, v) => !v)
      cloneP2name.prop('disabled', (i, v) => !v);
      p1name.toggleClass('hidden');
      p2name.toggleClass('hidden');
      cloneP1name.toggleClass('show');
      cloneP2name.toggleClass('show');


      // P1 & P2 team field
      p1team.prop('disabled', (i, v) => !v)
      cloneP1team.prop('disabled', (i, v) => !v);
      p2team.prop('disabled', (i, v) => !v)
      cloneP2team.prop('disabled', (i, v) => !v);
      p1team.toggleClass('hidden');
      p2team.toggleClass('hidden');
      cloneP1team.toggleClass('show');
      cloneP2team.toggleClass('show');

      // P1 & P2 country field
      p1country.prop('disabled', (i, v) => !v)
      cloneP1country.prop('disabled', (i, v) => !v);
      p2country.prop('disabled', (i, v) => !v)
      cloneP2country.prop('disabled', (i, v) => !v);
      p1country.toggleClass('hidden');
      p2country.toggleClass('hidden');
      cloneP1country.val(p2country.val()).toggleClass('show');
      cloneP2country.val(p1country.val()).toggleClass('show');

      // P1 & P2 score field
      p1score.prop('disabled', (i, v) => !v)
      cloneP1score.prop('disabled', (i, v) => !v);
      p2score.prop('disabled', (i, v) => !v)
      cloneP2score.prop('disabled', (i, v) => !v);
      p1score.toggleClass('hidden');
      p2score.toggleClass('hidden');
      cloneP1score.toggleClass('show');
      cloneP2score.toggleClass('show');
    })
  }
})
