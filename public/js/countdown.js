$(document).ready(function () {

  // const socket = io.connect('http://localhost:3000/');
  const socket = io.connect('https://xboxfighter-scoreboard.herokuapp.com/');
  // Set the date we're counting down to
  socket.on('countdown-time', (countdown) => {

    var countDownDate = new Date(countdown.time.time).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Break Over!";
      }
    }, 1000);
  })

})