artchitect-eventbus
===================

Event bus plugin for 
[architect](https://github.com/c9/architect)

## Configuration

```json
{
  "packagePath": "./node_modules/architect-eventbus"
}
```

## Usage

```js
// ping.js
module.exports = function (options, imports, register) {

  var bus = imports.eventbus;

  bus.emit('ping', { data: 'PING'});

  bus.on('pong', function (response) {

    console.log(response.data);
    
  });

  register();

};
```


```js
// pong.js
module.exports = function (options, imports, register) {

  var bus = imports.eventbus;

  bus.on('ping', function (response) {
  	
  	console.log(response.data);

  	setTimeout(function () {
  		  		
  		bus.emit('pong', {data: 'PONG'});

  	}, 3000);

  });

  register();

};
```

## License

    The MIT License

    Copyright (c) 2012-2013 Jonathan Brumley <cayasso@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    'Software'), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
