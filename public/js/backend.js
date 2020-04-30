$(document).ready(function () {
  console.log('Backend')

  $('form').submit(function(e){
    e.preventDefault()
    let value;
      value= $(this).serializeArray();
    console.log("array data: ",value)
     
    const socket = io.connect('http://localhost:3000');
    socket.emit('server', { client: value });
  })

  
})