/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let last_len=[];
    let ans=[];
    for(let i=0;i<s.length;i++){
        let char=s[i];
        if(char==="("){
            last_len.push(ans.length);
        }else if(char===")"){
            let l=last_len.pop();
            let res=ans.slice(l,s.length-1).reverse();
            ans.splice(l,ans.length,...res);
        }else{
            ans.push(char) ;
        }
    }
    return ans.join("");
};