var fs = require("fs");
var line = fs.readFileSync('/dev/stdin', 'utf8').replace(/\n/,"");
//var line = "0100000001845e4ffb4f64e3d9490c75c0a362deb385c3f9661e4865525bca8ec4a7d998d701000000da00473044022026b6288a7fa5a8620761caf4ecb286e625232db2f10f1a6560930ad8c671954d022014fcae123cbf61b7aafa38fe41a8e5ed7fa0da065abd6c1ca6befc93f954a68501483045022100b939d86b3a99f7946f1b505bf08eef0eee32c632bf298da8808cf8c4a8da653b02202df794f845a06321fb1f667578fc04c2f841f1843196a4608af21f79f12341fc0147522103969dc6c6d8cff237ed42c161cd2adbb1b8a4c26685f682df247bc8093ac56cb6210350431b0154f1cf2017c7f075e07f305316e7415f080809ab36e8524121336fea52aeffffffff02400d03000000000017a914aabba8f2d2f0be464e02f0503b41d163114d79cc871b96ad030000000017a914813481ea61fedf60dd9ef65a566d52269101d8068700000000";
//var result = "f6b3eebb57623157063c8c7dc15bba22f95f5f1173c448b45070206faa0b3aa1";

var fullnode = require("fullnode");
var Tx = fullnode.Tx;
var tx = new Tx().fromHex(line);

tx["transactionId"] = function(){
  var hash = this.hash();
  var arr = [];
  for(var i=0; i < hash.length; i++){
    arr.unshift(hash[i].toString(16).replace(/^[0-f]$/, "0$&"));
  }
  return arr.join("");
}

console.log(tx.transactionId());
