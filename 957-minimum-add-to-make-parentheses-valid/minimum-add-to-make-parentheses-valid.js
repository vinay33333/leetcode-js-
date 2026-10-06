/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let l=0;
    let r=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            l++;
        }else {
            if(l>0){
                l--;
            }else r++;
        }
    }
    return l+r;
};