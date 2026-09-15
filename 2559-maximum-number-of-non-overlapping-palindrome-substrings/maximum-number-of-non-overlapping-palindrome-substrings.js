/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);

    const isPalindrome = (l, r) => {
        while (l < r) {
            if (s[l++] !== s[r--]) return false;
        }
        return true;
    };

    for (let i = k; i <= n; i++) {
        dp[i] = dp[i - 1];

        if (isPalindrome(i - k, i - 1)) {
            dp[i] = Math.max(dp[i], 1 + dp[i - k]);
        }
        if (isPalindrome(i - k - 1, i - 1)) {
            dp[i] = Math.max(dp[i], 1 + dp[i - k - 1]);
        }
    }

    return dp[n];
};