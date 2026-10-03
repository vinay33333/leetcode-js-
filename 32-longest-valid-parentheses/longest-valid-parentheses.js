/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s==='') return 0;
    let open_cnt=0;
    let close_cnt=0;
    let ans=0;

    for(let i=0;i<s.length;i++){
        if(s[i]==='(') open_cnt++;
        else close_cnt++;
        if(open_cnt===close_cnt){
            ans=Math.max(ans,open_cnt+close_cnt);
        }else if(close_cnt > open_cnt){
            open_cnt=0;
            close_cnt=0;
        }
    }
    open_cnt=0;
    close_cnt=0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i] ===')') close_cnt++;
        else open_cnt++;
        if(close_cnt===open_cnt){
            ans=Math.max(ans,close_cnt+open_cnt);
        }else if(close_cnt < open_cnt){
            open_cnt=0;
            close_cnt=0;
        }
    }
    return ans;
};