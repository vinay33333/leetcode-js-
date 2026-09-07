/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    let n = s.length;
    let mod = 1000000007;

    let dp = Array(n + 1).fill(0);

    // Empty subsequence
    dp[0] = 1;

    // Last occurrence of each character
    let last = new Map();

    for (let i = 1; i <= n; i++) {
        let ch = s[i - 1];

        // Double the previous subsequences
        dp[i] = (2 * dp[i - 1]) % mod;

        // Remove duplicate subsequences
        if (last.has(ch)) {
            let prev = last.get(ch);

            dp[i] = (dp[i] - dp[prev - 1] + mod) % mod;
        }

        last.set(ch, i);
    }

    // Remove empty subsequence
    return (dp[n] - 1 + mod) % mod;
};