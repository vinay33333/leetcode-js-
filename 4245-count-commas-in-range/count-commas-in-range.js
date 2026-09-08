/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if(n<1000) return 0;
    let cnt=0;
    while(n>=1000){
        cnt=cnt+1;
        n=n-1;
    }
    return cnt;
};