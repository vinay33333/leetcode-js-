/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans=[];
    function h(str,op,cl){
        if(str.length===2*n){
            return ans.push(str);
        }
        if(op<n){
            h(str+'(',op+1,cl);
        }
        if(cl<op){
            h(str+')',op,cl+1);
        }
    }
    h('',0,0);
    return ans;
};