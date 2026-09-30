/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let cnt=0;
    let max_cnt=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            cnt++;
            max_cnt=Math.max(max_cnt,cnt);
        }else if(s[i]===')'){
            cnt--;
        }
    }
    return max_cnt;
};