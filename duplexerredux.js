var duplexer = require('duplexer')
var through = require('through')

module.exports = function(counter){	
	var count = {}
	return duplexer(through(countCountries, setCount), counter)

	function countCountries(buf){
		var country = buf.country;
		count[country] = count[country] || 0
		count[country] = count[country] + 1
	}

	function setCount(buf){	
		counter.setCounts(count)		
	}
}


