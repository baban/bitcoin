var fs = require("fs");
var fullnode = require("fullnode");
var Block = fullnode.Block;
var BlockHeader = fullnode.BlockHeader;
var BN = fullnode.Bn;

var reversebuf = function(buf) {
  var buf2 = new Buffer(buf.length);
  for (var i = 0; i < buf.length; i++) {
    buf2[i] = buf[buf.length-1-i];
  }
  console.log(buf2);
  return buf2;
};

function is0000(hash){
  return hash[hash.length-1] == 0 && hash[hash.length-2] == 0
}

function blockId(){
  var arr = [];
  for(var i=0; i < this.length; i++){
    arr.unshift(this[i].toString(16).replace(/^[0-f]$/, "0$&"));
  }
  return arr.join("");
}

//var line = "0100000000000000000000000000000000000000000000000000000000000000000000003BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A29AB5F49FFFF001D00000000".toLowerCase();
//var result = "00007cc6ec08c5d53c32ceaf6e8309c32eb07fc903a94ec77ac2bf6e48f7adb3";
var line = fs.readFileSync('/dev/stdin', 'utf8').replace(/\n/,"");
var buf = new Buffer(line,'hex');
var magicnum = eval("0xd9b4bef9");
let header = new BlockHeader().fromBuffer(buf);

//for(var i=8603; i < 8604; i++){
for(var i=0; i < 0xffffffff; i++){
  header.nonce = i;
  let block = new Block(magicnum, 0, header, 0, []);

  var hash = block.hash();
  if(is0000(hash)){
    hash["blockId"] = blockId;
    console.log(i);
    console.log(hash.blockId());
    //console.log(result);
    break;
  }
}
