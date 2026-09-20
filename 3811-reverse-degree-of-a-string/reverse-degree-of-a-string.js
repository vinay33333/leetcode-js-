/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let ans=0;
    let res=0;
    for(let i=0;i<s.length;i++){
        let f_pos=s.charCodeAt(i)-96;
        let l_pos=27-f_pos;
        res=l_pos*(i+1);
        ans+=res;
    }
    return ans;
};