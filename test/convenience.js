// --------------------------------------------------------------------------------------------------------------------
//
// tyn.io - (c) 2015 Tynio.
//
// License: MIT
//
// --------------------------------------------------------------------------------------------------------------------

// core
var dgram = require('dgram')

// npm
var test = require('tape')

// local
var stattoClient = require('../')

// --------------------------------------------------------------------------------------------------------------------
// setup

var expected = [
  'c:web.hit:1',
  'c:api.req:1',
  'c:minifier.crunch:1',
]
var msgs = []

// create a socket and start a server
var server = dgram.createSocket('udp4')
var client

server.on('message', function (msg, rinfo) {
  msgs.push(msg.toString())
  if ( msgs.length === expected.length ) {
    client.close()
    doTest()
  }
})  

// listen on a port
var port = 9526
server.bind(port, function() {

  // create a client and send the server some messages
  client = stattoClient()

  client.send('c:web.hit:1')
  client.counter('api.req')
  client.counter('minifier.crunch', 1)
})

// --------------------------------------------------------------------------------------------------------------------
// the test itself (called when all messages have been received)

function doTest() {
  test('Convenience methods', function(t) {
    t.plan(msgs.length)

    msgs.forEach(function(msg, i) {
      t.equal(msg, expected[i], 'Message ' + i + ' is correct')
    })

    server.close()

    t.end()
  })
}

// --------------------------------------------------------------------------------------------------------------------
