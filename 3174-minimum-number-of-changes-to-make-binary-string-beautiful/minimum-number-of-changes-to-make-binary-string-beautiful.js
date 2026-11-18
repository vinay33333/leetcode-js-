/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let cnt=0;
    for(let i=0;i<s.length;i+=2){
        let curr_ele=s[i];
        if(curr_ele!==s[i+1]) cnt++;
    }
    return cnt;
};