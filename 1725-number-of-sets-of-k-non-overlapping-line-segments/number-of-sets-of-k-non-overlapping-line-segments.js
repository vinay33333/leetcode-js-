/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
    const MOD = 1_000_000_007;
    const dp = Array.from({ length: k + 1 }, () => [0, 0]);
    
    dp[0][0] = 1;

    for (let i = 1; i < n; i++) {
        const nextDp = Array.from({ length: k + 1 }, () => [0, 0]);
        
        for (let j = 0; j <= k; j++) {
            nextDp[j][0] = (dp[j][0] + dp[j][1]) % MOD;
            
            if (j > 0) {
                nextDp[j][1] = (dp[j][1] + dp[j - 1][0] + dp[j - 1][1]) % MOD;
            }
        }
        
        for (let j = 0; j <= k; j++) {
            dp[j][0] = nextDp[j][0];
            dp[j][1] = nextDp[j][1];
        }
    }

    return (dp[k][0] + dp[k][1]) % MOD;
};