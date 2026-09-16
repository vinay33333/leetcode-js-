/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let new_map=new Map();
    for(let i=0;i<s.length;i++){
        if(new_map.has(s[i])){
            return s[i];
        }else new_map.set(s[i],1);
    }
};