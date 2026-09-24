/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while(n>=10 ||n===7){
        let resMul=String(n).split("").reduce((acc,digi) =>acc+Number(digi)**2,0);
        n=resMul;
    }
    return n===1;
};