var fs = require("fs");
var fullnode = require("fullnode");
var Hash = fullnode.Hash;

//var lines = fs.readFileSync('/dev/stdin', 'utf8').split("\n");
var lines = "a891d05d006f7e7e29bd266f1a3314883ffb556fbf73caac6c4604d514b6944d\n6c4fb822beda2eb40bf212894711504b3cdca2af01e1fac469426feee477fa6d\n441582cfdb81dae14396578f239d35ad1419db7aaf46d056bf6738194414d01f\n1df8ee43477e43bf583fc0012fe7cbb22cb6a7b6223e98ec7c054bb7a20b89f3\n164577b2332bded00b27fd7943003b3036329de9d3bf1ee33f02beca0773c967\n210e8b96b3ce9d65ea9bf51b4c890f464fd81eb03e3648412469600b29d63045".split("\n");

//console.log(lines);

// 配列の要素数を偶数に揃える
if(lines.length%2 != 0){
  lines.push(lines[lines.length-1]);
}

console.log(lines);

// 配列の各要素をsha256sha256でラップ
var hlines = [];
lines.forEach(function(line){
  hlines.push(Hash.sha256Sha256(new Buffer(line,"hex")));
});

console.log(hlines);

function reduce(lines){
  if(lines.length<=1){
    return lines;
  } else {
    return [
      reduce(lines),
      reduce(lines)
    ];
  }
}
