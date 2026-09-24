/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num===0) return 0;
    while(num>=10){
        let res=String(num).split("").reduce((acc,digi)=>acc+Number(digi),0);
        num=res;
    }
    return num;
};