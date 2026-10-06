/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let left=0;
    let right=0;
    for(let ch of s){
        if(ch==='('){
            left++;
        }else{
            if(left>0){
                left--;
            }else {
                right++;
            }
        }
    }
    return left+right;
};