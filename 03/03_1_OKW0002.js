var fs = require("fs");

function print(v,endian){
  var arr = [];
  for(i=0;i<2;i++){
    arr[endian ? "unshift":"push"]( (v & 0xff).toString(16) );
    v >>= 8;
  }
  console.log(arr.join(" "));
}

var line = fs.readFileSync('/dev/stdin', 'utf8');
//var line = "-5000";
var arg = parseInt(line);
var n = Math.abs(arg);
var sign = (arg>0);

var a = n | (sign ? 0x0 : 0x8000);
print(a,true);
print(a,false);

var c = (0x10000 + arg) & 0xffff;

print(c,true);
print(c,false);
