var split = require('split')
var through = require('through')
var i = 1
process.stdin.pipe(split())
		.pipe(through(function(buf){
				if ( i % 2 == 1) this.queue(buf.toString().toLowerCase() + '\n')
				if ( i % 2 == 0) this.queue(buf.toString().toUpperCase() + '\n')
				i ++
			}))
		.pipe(process.stdout)
