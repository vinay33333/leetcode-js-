/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let new_map=new Map();
    let m=knowledge.length;
    for(let i=0;i<m;i++){
        new_map.set(knowledge[i][0],knowledge[i][1]);
    }
    let ans="";
    let i=0;
    let n=s.length;
    while(i<n){
        if(s[i]==="("){
            i++;
            let key_str="";
            while(s[i]!==")"){
                key_str=key_str+s[i];
                i++;
            }
            if(new_map.has(key_str)){
                ans=ans+new_map.get(key_str);
            }else{
                ans=ans+"?";
            }
            i++;
        }else{
            ans=ans+s[i];
            i++;
        }
    }
    return ans;
};