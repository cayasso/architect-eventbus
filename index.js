/**
 * Module dependencies
 */

var Emitter = require('events').EventEmitter;
var debug = require('debug')('architect-eventbus');

module.exports = function setup(options, imports, register) {

    debug("eventbus plugin start");

    var bus = new Emitter();

    /**
     * Register plugin
     */

    register(null, {
        eventbus: bus
    });
};