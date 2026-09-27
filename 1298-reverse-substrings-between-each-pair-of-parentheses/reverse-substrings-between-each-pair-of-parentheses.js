/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let last_len=[];
    let ans=[];
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            last_len.push(ans.length);
        }else if(s[i]===")"){
            let l=last_len.pop();
            let res=ans.slice(l,s.length).reverse();
            ans=ans.slice(0,l).concat(res);
        }else ans.push(s[i]);
    }
    return ans.join("");
};