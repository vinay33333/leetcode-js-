/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function(nums) {
    const n = nums.length;
    
    // prefMax[i] stores the maximum value in nums[0...i-1]
    const prefMax = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefMax[i + 1] = Math.max(prefMax[i], nums[i]);
    }
    
    // suffMin[i] stores the minimum value in nums[i...n-1]
    const suffMin = new Array(n + 1).fill(1e9);
    for (let i = n - 1; i >= 0; i--) {
        suffMin[i] = Math.min(nums[i], suffMin[i + 1]);
    }
    
    // prefDrop[i] counts the number of descents up to index i
    const prefDrop = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        prefDrop[i] = prefDrop[i - 1] + (nums[i - 1] > nums[i] ? 1 : 0);
    }
    
    let totalSum = 0;
    
    // Check all divisors k of n
    for (let k = 1; k <= n; k++) {
        if (n % k !== 0) continue;
        
        let possible = true;
        for (let i = 0; i < n; i += k) {
            const start = i;
            const end = i + k - 1;
            
            // 1. Check internal descents within the block plus the wrap-around drop
            let internalDrops = prefDrop[end] - (start > 0 ? prefDrop[start] : 0);
            if (nums[end] > nums[start]) {
                internalDrops += 1;
            }
            
            if (internalDrops > 1) {
                possible = false;
                break;
            }
            
            // 2. Check relative order between adjacent blocks
            if (start > 0 && prefMax[start] > suffMin[start]) {
                possible = false;
                break;
            }
        }
        
        if (possible) {
            totalSum += k;
        }
    }
    
    return totalSum;
};