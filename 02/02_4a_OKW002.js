var fs = require('fs');
var fullnode = require("fullnode");
var BN = fullnode.Bn;
var KeyPair = fullnode.KeyPair;
var ECDSA = fullnode.Ecdsa;
var PrivKey = fullnode.PrivKey;
var Pubkey = fullnode.Pubkey;

//var args = fs.readFileSync('/dev/stdin', 'utf8');

var stdintxt = "af06e55f021b12ddd4865b77aa53de1ca29f6935cc1956325337153a12d4d6c0\nb156503edf0848e2a2cc8d9fef8c5dc57de53ee61fc261444ca20d3b1e901042\n0109992a6fdf26080a16984ca64de792ae19305933ade928f4fd03174332c10c";

var lines = stdintxt.split("\n");
var privateKey = lines[0], k = lines[1], z = lines[2];
// console.log(new BN().fromBuffer(privateKey));
var keypair = new KeyPair().fromPrivKey( new BN().fromBuffer(privateKey) );
// keypair.pubKey = new Pubkey().fromPrivkey( keypair.privKey );
// keypair
console.log( keypair );

var ecdsa = new ECDSA();
ecdsa.hashbuf = z;
ecdsa.keypair = keypair;
//ecdsa.k = new BN().fromBuffer(k);

//var messagebuf = new Buffer(z);
//var hashbuf = fullnode.Hash.sha256(messagebuf);

var sig = ecdsa.sign();
/*

console.log(sig.r.toString("hex"));
console.log(sig.s.toString("hex"));
*/
