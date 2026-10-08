/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let cnt=0;
    let ans='';
    for(let ch of s){
        if(ch==='('){
            if(cnt>0){
                ans=ans+ch;
            }
            cnt++;
        }else {
            cnt--;
            if(cnt>0){
                ans+=ch;
            }
        }
    }
    return ans;
};