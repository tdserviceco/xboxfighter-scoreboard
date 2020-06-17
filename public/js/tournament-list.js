$(document).ready(function () {
  let value;
  let players = [];
  let brackets = [];
  $('form').on('submit', function (e) {
    e.preventDefault();
    value = $(this).serializeArray();
    $.ajax({
      url: 'https://api.challonge.com/v1/tournaments/' + value[1].value + '/participants.json?api_key=' + value[0].value,
      success: function (result) {
        $.each(result, function (i, item) {
          players[i++] = {
            'id' : item.participant.id,
            'display_name' : item.participant.display_name
          }
        });
      }
    })

    // Now we get the tournament bracket!
    $.ajax({
      url: 'https://api.challonge.com/v1/tournaments/' + value[1].value + '/matches.json?api_key=' + value[0].value,
      success: function (result) {
        $.each(result, function (i, item) {
          brackets[i++] = {
            'player1_id' : item.match.player1_id,
            'player2_id' : item.match.player1_id,
            'scores_csv' : item.match.scores_csv,
            'state' : item.match.state,
            'round' : item.match.round
          }
        });
        $.each(brackets, function(i, tournament){
          console.log(tournament)
          if(tournament === null) {
            console.log('contained null')
            return false;
          }
        })
      }
    });
   
  })
})