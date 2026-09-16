/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let res_str="";
    let hex="0123456789abcdef";
    if(num<0){
        num=num>>>0;
    }
    if(num===0) return "0"
    while(num>0){
        let rem=num%16;
        res_str=hex[rem]+res_str;
        num=Math.floor(num/16);
    }
    return res_str;
};