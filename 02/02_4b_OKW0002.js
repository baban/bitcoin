var arg = "032107fc24b3569f2feda301c7efc07f56fc8ab6870e61f03dcd93dbd9088a41f4\n0109992a6fdf26080a16984ca64de792ae19305933ade928f4fd03174332c10c\nb50516541adc71d6e3073d154b35b6170d495aa027841a889d17989a50349fdd\nf0913e15c7356fe39522209519a59bccff5dd6de131cfe4e04519a5aba75daf6";

var args = arg.split("\n");

var publicKey = args[0], z = args[1], r = args[2], s = args[3];

var w = 0; // s^-1 mod n
var u1;  // zw mod n
var u2;  // rw mod n

var point; // u1 * G + u2 * P

// r == x1 mod n
if(true){
  console.log("OK");
} else {
  console.log("NG");
}
