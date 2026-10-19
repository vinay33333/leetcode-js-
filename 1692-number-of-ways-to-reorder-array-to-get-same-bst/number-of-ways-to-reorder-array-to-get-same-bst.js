/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const MOD = 1000000007;
    const n = nums.length;
    
    // Precompute Pascal's triangle for combinations C(n, k)
    const comb = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0n));
    for (let i = 0; i <= n; i++) {
        comb[i][0] = 1n;
        for (let j = 1; j <= i; j++) {
            comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % BigInt(MOD);
        }
    }
    
    function getWays(arr) {
        if (arr.length <= 2) return 1n;
        
        let root = arr[0];
        let left = [];
        let right = [];
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < root) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        
        let leftWays = getWays(left);
        let rightWays = getWays(right);
        
        // Choose positions for 'left' elements in the combined left+right sequence
        let lLen = BigInt(left.length);
        let rLen = BigInt(right.length);
        let waysToMerge = comb[Number(lLen + rLen)][Number(lLen)];
        
        let ans = (waysToMerge * leftWays) % BigInt(MOD);
        ans = (ans * rightWays) % BigInt(MOD);
        
        return ans;
    }
    
    // Subtract 1 because the problem asks for ways to *reorder* nums 
    // excluding the original configuration itself.
    let totalWays = (getWays(nums) - 1n + BigInt(MOD)) % BigInt(MOD);
    return Number(totalWays);
};