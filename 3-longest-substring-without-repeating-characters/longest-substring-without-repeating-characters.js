/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let cnt=0;
    for(let i=0;i<s.length;i++){
        let str="";
        for(let j=i;j<s.length;j++){
            if(str.includes(s[j])){
                break;
            }
            str=str+s[j];
            cnt=Math.max(cnt,str.length);
        }
    }
    return cnt;
};