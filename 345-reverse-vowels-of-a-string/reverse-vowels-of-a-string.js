/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let n=s.length;
    let i=0;
    let j=s.length-1;
    let vow="aeiouAEIOU";
    let arr=s.split("");
    while(i<j){
        if(!vow.includes(s[i])){
            i=i+1;
        }else if(!vow.includes(s[j])) j--;
        else{
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i=i+1;
            j=j-1;
        }
    }
    return arr.join("");
};