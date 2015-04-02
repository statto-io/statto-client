# statto-client #

A client for statto - easy to use.

## Synopsis ##

```js
var stattoClient = require('statto-client')

// create a client (also takes params for host and port
var client = stattoClient()
var client = stattoClient({ host : 'localhost', port : 9526 })

// a counter - the number of requests we've received
client.send('c:server.request:1')

// a gauge - the amount of free memory
client.send('m:mem.free.tatooine:111964160') // tatooine is the server

// a timer - the elapsed request time to a database
client.send('t:db.time:23') // e.g. 23ms

// a set - the value to increment
client.send('t:user-agent:Mozilla/5.0')
```

You can also send multiple stats in the same packet. To do that just pass an array
of any of the above:

```js
// multiple counters - request count AND memory gauge AND database timer
client.send([ 'c:server.request:1', 'm:mem.free.tatooine:111964160', 't:db.time:23' ])
```

## Methods ##

There are also convenience methods for all of the above. These signatures are as follows:

* `.counter(name, inc=1)`
* `.gauge(name, amount)`
* `.timer(name, time)`
* `.set(name, value)`

Just the counter `amount` has a default of one. All other amounts/values/times must be provided.

## Author ##

Written by [Andrew Chilton](http://chilts.org/) - [Twitter](https://twitter.com/andychilton).

Written for [Tynio](https://tyn.io/) so we can use a statsd-like daemon in a much easier way. Our use-case involves a
stats callback which writes each file to Rackspace's Cloud Files, which are aggregated in a separate process elsewhere.
ie. the stats daemon is not where the hard work is, it's pretty easy.

## License ##

The MIT License (MIT)

Copyright 2015 Tynio Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

(Ends)
