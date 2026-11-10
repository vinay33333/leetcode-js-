/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===1) return 1;
    let new_dp=new Array(n+1);
    new_dp[1]=1;
    new_dp[2]=2;
    for(let i=3;i<=n;i++){
        new_dp[i]=new_dp[i-1]+new_dp[i-2];
    } 
    return new_dp[n];
};