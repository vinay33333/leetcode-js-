/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let n=s.length;
    let new_map=new Map();
    for(let i=0;i<n;i++){
        if(!new_map.has(s[i])){
            new_map.set(s[i],1);
        }else{
            new_map.set(s[i],new_map.get(s[i])+1);
        }
    }
    for(let i=0;i<s.length;i++){
        if(new_map.get(s[i])===1) return i;
    }
    return -1;
};