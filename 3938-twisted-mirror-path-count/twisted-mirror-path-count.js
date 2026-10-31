/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function(grid) {
    const MOD = 1000000007;
    const m = grid.length;
    const n = grid[0].length;
    
    // dp[c][0] represents paths coming from the top into column c
    // dp[c][1] represents paths coming from the left into column c
    // Actually, following the optimized space DP matrix:
    const dp = Array.from({ length: n + 1 }, () => [0, 0]);
    dp[1] = [1, 1];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                // If it's a mirror, the directions swap / reflect
                dp[c + 1] = [dp[c + 1][1], dp[c][0]];
            } else {
                // Regular cell: combine paths from top and left
                const val = (dp[c + 1][1] + dp[c][0]) % MOD;
                dp[c + 1] = [val, val];
            }
        }
    }

    return dp[n][0];
};