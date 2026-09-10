/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max_len=0;
    let l=0;
    let new_set=new Set();
    for(let r=0;r<s.length;r++){
        while(new_set.has(s[r])){
            new_set.delete(s[l]);
            l++
        }
        new_set.add(s[r]);
        max_len=Math.max(max_len,r-l+1);
    }
    return max_len;
};