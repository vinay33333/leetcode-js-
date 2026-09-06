/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let n=s.length;
    let m=t.length;
    let dp=Array.from({length:n+1} , ()=>Array(m+1).fill(-1));
    function count_occ(s1,s2,idx1,idx2){
        if(idx2===0) return 1;
        if(idx1===0) return 0;
        if(dp[idx1][idx2] !==-1) return dp[idx1][idx2];
        if(s1[idx1-1]===s2[idx2-1]){
            dp[idx1][idx2]=count_occ(s1,s2,idx1-1,idx2-1)+count_occ(s1,s2,idx1-1,idx2);
        }else{
            dp[idx1][idx2]=count_occ(s1,s2,idx1-1,idx2);
        }
        return dp[idx1][idx2];
    }
    return count_occ(s,t,n,m);
};