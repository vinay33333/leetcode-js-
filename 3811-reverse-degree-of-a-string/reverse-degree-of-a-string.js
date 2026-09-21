/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let res=0;
    let ans=0;
    for(let i=0;i<s.length;i++){
        let fpos=s.charCodeAt(i)-96;
        let lpos=27-fpos;
        res=lpos*(i+1);
        ans+=res;
    }
    return ans;
};