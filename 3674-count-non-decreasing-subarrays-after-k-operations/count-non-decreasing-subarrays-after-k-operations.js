/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countNonDecreasingSubarrays = function(nums, k) {
    let ans = 0;
    let cost = 0;
    const dq = [];
    let dqHead = 0;
    let j = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; --i) {
        const num = nums[i];
        
        // Maintain monotonic decreasing order of values in the deque
        while (dq.length > dqHead && nums[dq[dq.length - 1]] < num) {
            const l = dq.pop();
            const r = dq.length > dqHead ? dq[dq.length - 1] : j + 1;
            cost += (r - l) * (num - nums[l]);
        }
        dq.push(i);

        // Shrink the window from the right if cost exceeds k
        while (cost > k) {
            cost -= nums[dq[dqHead]] - nums[j];
            if (dq[dqHead] === j) {
                dqHead++;
            }
            --j;
        }

        // Add the number of valid subarrays starting at `i`
        ans += j - i + 1;

        // Periodic cleanup to keep array size optimal
        if (dqHead > dq.length) {
            dq.splice(0, dqHead);
            dqHead = 0;
        }
    }

    return ans;
};