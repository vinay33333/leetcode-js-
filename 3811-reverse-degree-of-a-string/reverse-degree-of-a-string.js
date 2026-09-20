/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let n=s.length;
    let ans=0;
    let res=0;
    for(let i=0;i<n;i++){
        let first_position=s.charCodeAt(i)-96;
        let from_last_pos=27-first_position;
        res=from_last_pos*(i+1);
        ans=ans+res;
    }
    return ans;
};