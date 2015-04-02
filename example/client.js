// --------------------------------------------------------------------------------------------------------------------
//
// tyn.io - (c) 2015 Tynio.
//
// License: MIT
//
// --------------------------------------------------------------------------------------------------------------------

// local
var stattoClient = require('../')

// --------------------------------------------------------------------------------------------------------------------

var client = stattoClient()

// counters
client.send('c:hit:1')
client.send('c:hit:2')
client.send('c:item-CTOsx9rZ2O38:1')
client.send([ 'c:item-CTOsx9rZ2O38:1', 'c:item-e2KzwkiGa67D:1' ])

client.counter('api.hit')
client.counter('api.hit', 3)

// gauges
client.send('g:accounts.total:' + Math.floor(Math.random() * 100))
client.send('g:sites.total:' + Math.floor(Math.random() * 1000))

client.gauge('sites.deleted', Math.floor(Math.random() * 20))

// Timing stat
client.send('t:req:94')
client.send([ 't:req:89', 't:api:20' ])
client.timer('api.request.elapsed', Math.floor(Math.random() * 100))
client.timer('web.request.elapsed', Math.floor(Math.random() * 200))

// sets
client.send('s:ip-address:127.0.0.1')
client.send([ 's:ip-address:192.168.10.10', 's:ip-address:192.168.10.11' ])
client.send([ 's:ip-address:192.168.10.10', 's:ip-address:192.168.10.11' ])
client.send([ 's:ip-address:192.168.10.10', 's:ip-address:192.168.10.11' ])

client.set('ip-address', '54.54.54.54')
client.set('ip-address', '54.54.54.54')
