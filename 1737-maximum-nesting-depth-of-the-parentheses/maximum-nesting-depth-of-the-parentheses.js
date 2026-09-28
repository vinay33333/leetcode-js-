/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let cnt=0;
    let max_p=0;
    for(let ch of s){
        if(ch==='('){
            cnt++;
            max_p=Math.max(max_p,cnt);
        }else if(ch===")") cnt--;
    }
    return max_p;
};