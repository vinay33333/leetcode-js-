/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let str=title.split(" ");
    let res=[];
    for(let i=0;i<str.length;i++){
        let word=str[i];
        let ans="";
        if(word.length===1 ||word.length===2){
            ans=word.toLowerCase();
        }else {
            ans=word[0].toUpperCase() +word.slice(1).toLowerCase();
        }
        res.push(ans);
    }
    return res.join(" ");
};