var address = require('fs').readFileSync('/dev/stdin', 'utf8');
address = address.replace(/\n/g,"");

//var address = "DXjqxEXcqRyEsbyWmsG2a9";

var bs58 = require('bs58')

// UTF8の16進文字列を文字列に変換
function  utf8_hex_string_to_string (hex_str1)
{
  var bytes2 = hex_string_to_bytes(hex_str1);
  var str2 = utf8_bytes_to_string(bytes2);
  return str2;
}


// UTF8のバイト配列を文字列に変換
function  utf8_bytes_to_string  (arr)
{
    if (arr == null)
        return null;
    var result = "";
    var i;
    while (i = arr.shift()) {
        if (i <= 0x7f) {
            result += String.fromCharCode(i);
        } else if (i <= 0xdf) {
            var c = ((i&0x1f)<<6);
            c += arr.shift()&0x3f;
            result += String.fromCharCode(c);
        } else if (i <= 0xe0) {
            var c = ((arr.shift()&0x1f)<<6)|0x0800;
            c += arr.shift()&0x3f;
            result += String.fromCharCode(c);
        } else {
            var c = ((i&0x0f)<<12);
            c += (arr.shift()&0x3f)<<6;
            c += arr.shift() & 0x3f;
            result += String.fromCharCode(c);
        }
    }
    return result;
}

// 16進文字列をバイト値に変換
function  hex_to_byte   (hex_str)
{
  return parseInt(hex_str, 16);
}

// バイト配列を16進文字列に変換
function  hex_string_to_bytes   (hex_str)
{
  var result = [];

  for (var i = 0; i < hex_str.length; i+=2) {
    result.push(hex_to_byte(hex_str.substr(i,2)));
  }
  return result;
}

var out = bs58.decode(address)
var buff = new Buffer(out).toString('hex');
//console.log(buff);
var str = utf8_hex_string_to_string(buff);
//var str = utf8_bytes_to_string(buff);
console.log(str);

