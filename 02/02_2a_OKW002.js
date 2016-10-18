var bs58check = require('bs58check');
var fs = require('fs');
//var data = "example data";
var data = fs.readFileSync('/dev/stdin', 'utf8').replace(/\n/g,"");

var out = bs58check.encode(new Buffer(data));
console.log(out);
