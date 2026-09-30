/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let cnt=0;
    let ans=[];
    for(let i=0;i<seq.length;i++){
        if(seq[i]==='('){
            ans.push(cnt%2);
            cnt++;
        }else {
            cnt--;
            ans.push(cnt%2);
        }
    }
    return ans;
};