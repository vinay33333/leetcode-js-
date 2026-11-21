/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function(nums) {
    nums.sort((a, b) => a - b);

    const dp = new Map();
    let ans = 1;

    for (const x of nums) {
        const nextVal = (dp.get(x) ?? 0) + 1;
        const currVal = (dp.get(x - 1) ?? 0) + 1;

        dp.set(x + 1, Math.max(dp.get(x + 1) ?? 0, nextVal));
        dp.set(x, Math.max(dp.get(x) ?? 0, currVal));

        ans = Math.max(ans, dp.get(x + 1), dp.get(x));
    }

    return ans;
};