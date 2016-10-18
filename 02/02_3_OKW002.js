//var arg = "af06e55f021b12ddd4865b77aa53de1ca29f6935cc1956325337153a12d4d6c0"
var fs = require('fs');
var BigInteger = require('bigi');
var ecurve = require('ecurve');

var arg = fs.readFileSync('/dev/stdin', 'utf8').replace(/\n/,"");
var privateKey = new Buffer(arg, 'hex');
var ecparams = ecurve.getCurveByName('secp256k1');
var curvePt = ecparams.G.multiply(BigInteger.fromBuffer(privateKey));
var x = curvePt.affineX.toBuffer(32);
var y = curvePt.affineY.toBuffer(32);

var publicKey = Buffer.concat([new Buffer([0x04]), x, y]);
var key = publicKey.toString('hex');

console.log(key);
console.log( ((publicKey % 2)?"02":"03") +key.substring(2,65) );
