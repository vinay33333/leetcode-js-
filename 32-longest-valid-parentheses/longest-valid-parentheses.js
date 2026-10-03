/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let open=0;
    let close=0;
    let ans=0;
    for(let ch of s){
        if(ch==='(') open++;
        else close++;
        if(open===close){
            ans=Math.max(ans,open+close);
        }else if(open<close){
            open=0;
            close=0;
        }
    }
    open=0;
    close=0;
    for(let ch1 of [...s].reverse()){
        if(ch1===')') close++;
        else open++;
        if(close===open) {
            ans=Math.max(ans,close+open);
        }else if(close < open){
            close=0;
            open=0;
        }
    }
    return ans;
};