/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let m=digits.length;
    let res=new Set();
    for(let i=0;i<m;i++){
        for(let j=0;j<m;j++){
            for(let k=0;k<m;k++){
                if(i===j||j===k||i===k){
                    continue;
                }
                let req_num=(digits[i]*100) + (digits[j]*10) + (digits[k]*1)
                if(req_num >=100 && req_num%2===0){
                    res.add(req_num);
                }
            }
        }
    }
    return res.size;
};