var crypto = require('crypto');
var fs = require('fs');

var arg = fs.readFileSync('/dev/stdin', 'utf8').replace(/\n/g,"");
//var arg = "example data to be hashed";

var hash = [
  [
    "SHA1",
    function(arg){
      var sum = crypto.createHash('sha1');
      sum.update(arg);
      return sum.digest('hex');
    }
  ],
  [
    "SHA256",
    function(arg){
      var sum = crypto.createHash('sha256');
      sum.update(arg);
      return sum.digest('hex');
    }
  ],
  [
    "SHA512",
    function(arg){
      var sum = crypto.createHash('sha512');
      sum.update(arg);
      return sum.digest('hex');
    }
  ],
  [
    "SHA256D",
    function(arg){
      var sum = crypto.createHash('sha256');
      sum.update(arg);
      var arg = sum.digest('hex');
      var sum = crypto.createHash('sha256');
      var arg2 = sum.update(arg,"hex");
      return arg;
    }
  ],
  [
    "RIPEMD160",
    function(arg){
      var sum = crypto.createHash('ripemd160');
      sum.update(arg);
      return sum.digest('hex');
    }
  ],
  [
    "RIPEMD160SHA256",
    function(arg){
      function sha256(arg){
        var sum = crypto.createHash('sha256');
        sum.update(arg);
        return sum.digest('hex');
      }
      function ripemd160(arg){
        var sum = crypto.createHash('sha256');
        sum.update(arg);
        return sum.digest('hex');
      }
      return ripemd160(sha256(arg));
    }
  ]
]

hash.forEach(function(item){
  var key = item[0], fun = item[1];
  console.log(key+":" + fun.call(null,arg));
});
