var through = require('through')
var trumpet = require('trumpet')
var tr = trumpet()

var toUpper = function(buf){ this.queue(buf.toString().toUpperCase()) }

process.stdin.pipe(tr).pipe(process.stdout)

var stream = tr.select('.loud').createStream()
stream.pipe(through(toUpper)).pipe(stream)

