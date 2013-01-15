var filename = process.argv[2]
var FNV = require('./fnv').FNV
var fs = require('fs')

h = new FNV()

var s = fs.ReadStream(filename);
s.on('data', function(d) {
  h.update(d);
});

s.on('end', function() {
  var d = h.digest('hex');
  console.log(d + '  ' + filename);
});