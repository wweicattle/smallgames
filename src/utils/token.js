import CryptoJS from 'crypto-js'
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;

    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}


//token根据getWXUser获得
let token = "q1qbq4LgH36a6Gt";
let timestamp = Date.parse(new Date());

let sign ;


let content = pm.request.url.query.members;

content = Array.from(content)
let str = "";

var arr = [];
for(let i in content){
    arr.push(content[i])
}
//按照ascii编码排序
arr.sort(function(a,b){
    if(a.key>b.key){
        return 1;
    }
    if(a.key==b.key){
        return 0;
    }
    return -1;
})

for(let i in arr){
    str += arr[i].key+"="+arr[i].value+"&";
}
str+=("timestamp="+ base64encode(timestamp+""))+"&";
str+=("token="+token);

sign = CryptoJS.MD5(str)+"";

// pm.environment.set('sign',sign);

export {
    token,sign,timestamp
}