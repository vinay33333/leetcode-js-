/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let res=0;
    for(let i=1000;i<=n;i*=1000){
        res=res+n-i+1;
    }
    return res;
};