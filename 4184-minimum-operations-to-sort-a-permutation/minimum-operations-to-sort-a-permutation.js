/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    let zero = 0;
    
    // Find the position of 0
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            zero = i;
            break;
        }
    }

    // Helper to check if the array forms a valid sorted cyclic sequence with a given step
    const check = (step) => {
        for (let i = 1; i < n; i++) {
            const prev = (zero + (i - 1) * step + n) % n;
            const curr = (zero + i * step + n) % n;
            if (nums[prev] > nums[curr]) {
                return false;
            }
        }
        return true;
    };

    let ans = Number.MAX_SAFE_INTEGER;

    // Case 1: Forward cyclic check (step = 1)
    if (check(1)) {
        ans = Math.min(ans, zero);         // Direct rotations
        ans = Math.min(ans, n - zero + 2); // Reverse -> rotate -> reverse
    }

    // Case 2: Backward/Reversed cyclic check (step = -1)
    if (check(-1)) {
        ans = Math.min(ans, zero + 2);     // Rotate -> reverse
        ans = Math.min(ans, n - zero);     // Reverse -> rotate
    }

    return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
};