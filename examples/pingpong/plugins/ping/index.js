module.exports = function (options, imports, register) {

  var bus = imports.eventbus;

  function send() {

    setTimeout(function () {
      bus.emit('ping', { data: 'PING >>'});
    }, 3000);
    
  }
  
  bus.on('pong', function (response) {

    console.log(response.data);
    send();

  });

  send();

  register();

};