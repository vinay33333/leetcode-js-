/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let n=s.length;
    let max_ele=0;
    let min_ele=0;
    for(let i=0;i<n;i++){
        if(s[i]==='('){
            max_ele++;
            min_ele++;
        }
        else if(s[i]===')'){
            min_ele=min_ele-1;
            max_ele--;
        }
        else{
            min_ele--;
            max_ele++;
        }
        if(max_ele<0) return false;
        if(min_ele<0) min_ele=0;
    }
    return min_ele===0;
};