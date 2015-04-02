// --------------------------------------------------------------------------------------------------------------------
//
// tyn.io - (c) 2015 Tynio.
//
// License: MIT
//
// --------------------------------------------------------------------------------------------------------------------

var dgram = require('dgram')

var DEFAULT = {
  host : '127.0.0.1',
  port : 9526,
}

function Client(opts) {
  opts = opts || {}
  this.host = opts.host || DEFAULT.host
  this.port = opts.port || DEFAULT.port

  // Create socket
  this.socket = dgram.createSocket("udp4")
  this.socket.on("error", function(err) {
    console.error(err)
  })
}

Client.prototype.send = function send(str, callback) {
  var self = this

  var buffer
  // if we have a str, cool. If an array, then join them together.
  if ( Array.isArray(str) ) {
    buffer = new Buffer(str.join("\n"))
  }
  else {
    // it's a string
    buffer = new Buffer(str)
  }

  // Send
  this.socket.send(buffer, 0, buffer.length, this.port, this.host, function (err, bytes) {
    if (err) throw err
    console.log('Sent [%s] (%d bytes)', buffer, bytes)
  })
}

Client.prototype.counter = function counter(name, inc) {
  inc = inc || 1
  this.send('c:' + name + ':' + inc)
}

Client.prototype.gauge = function counter(name, amount) {
  this.send('g:' + name + ':' + amount)
}

Client.prototype.timer = function timer(name, time) {
  this.send('t:' + name + ':' + time)
}

Client.prototype.set = function set(name, value) {
  this.send('s:' + name + ':' + value)
}

Client.prototype.close = function close() {
  this.socket.close()
}

module.exports = function(opts) {
  return new Client(opts)
}
