$(document).ready(function () {
  const socket = io.connect('http://localhost:3000');
  // const socket = io.connect('https://xboxfighter-scoreboard.herokuapp.com');
  console.log('Backend')
  $('.swap').click(function(){
    /**
     * This is a really messy code.. please if someone can cut down the cloning proccess i would be a happy coder!
     */
    let p1nameVal = $('#p1name').val();
    let p2nameVal = $('#p2name').val();
    let p1teamVal = $('#p1team').val();
    let p2teamVal = $('#p2team').val();
    let p1countryVal = $('#p1country').val();
    let p2countryVal = $('#p2country').val();
    let p1scoreVal = $('#p1score').val();
    let p2scoreVal = $('#p2score').val();
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

    // P1 & P2 name field
    p1name.prop('disabled', (i, v) => !v)
    cloneP1name.prop('disabled', (i, v) => !v);
    p2name.prop('disabled', (i, v) => !v)
    cloneP2name.prop('disabled', (i, v) => !v);
    p1name.toggleClass('hidden');
    p2name.toggleClass('hidden');
    cloneP1name.val(p2nameVal).toggleClass('show');
    cloneP2name.val(p1nameVal).toggleClass('show');


    // P1 & P2 team field
    p1team.prop('disabled', (i, v) => !v)
    cloneP1team.prop('disabled', (i, v) => !v);
    p2team.prop('disabled', (i, v) => !v)
    cloneP2team.prop('disabled', (i, v) => !v);
    p1team.toggleClass('hidden');
    p2team.toggleClass('hidden');
    cloneP1team.val(p2teamVal).toggleClass('show');
    cloneP2team.val(p1teamVal).toggleClass('show');

    // P1 & P2 country field
    p1country.prop('disabled', (i, v) => !v)
    cloneP1country.prop('disabled', (i, v) => !v);
    p2country.prop('disabled', (i, v) => !v)
    cloneP2country.prop('disabled', (i, v) => !v);
    p1country.toggleClass('hidden');
    p2country.toggleClass('hidden');
    cloneP1country.val(p2countryVal).toggleClass('show');
    cloneP2country.val(p1countryVal).toggleClass('show');

    // P1 & P2 score field
    p1score.prop('disabled', (i, v) => !v)
    cloneP1score.prop('disabled', (i, v) => !v);
    p2score.prop('disabled', (i, v) => !v)
    cloneP2score.prop('disabled', (i, v) => !v);
    p1score.toggleClass('hidden');
    p2score.toggleClass('hidden');
    cloneP1score.val(p2scoreVal).toggleClass('show');
    cloneP2score.val(p1scoreVal).toggleClass('show');
  })

  $('form').submit(function (e) {
    e.preventDefault()
    let value;
    value = $(this).serializeArray();

    socket.emit('server', { client: value });
  })
})