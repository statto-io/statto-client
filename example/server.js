// --------------------------------------------------------------------------------------------------------------------
//
// tyn.io - (c) 2015 Tynio.
//
// License: MIT
//
// --------------------------------------------------------------------------------------------------------------------

// npm
var statto = require('statto')
var stattoProcess = require('statto-process')

// --------------------------------------------------------------------------------------------------------------------

var stattoServer = statto(function(err, port) {
  console.log('Stats server is listening on port %s', port)
})

stattoServer.on('stats', function(stats) {
  console.log('raw   :', stats)
  stats = stattoProcess(stats)
  console.log('stats :', stats)
})

// --------------------------------------------------------------------------------------------------------------------
