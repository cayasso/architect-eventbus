module.exports = function (options, imports, register) {

  var bus = imports.eventbus;

  bus.on('ping', function (response) {
    
    console.log(response.data);

    setTimeout(function () {
            
      bus.emit('pong', {data: '<< PONG'});

    }, 3000);

  });

  register();

};