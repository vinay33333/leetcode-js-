/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
    const n = nums.length;

    if (k === 1) {
        return [n * (n + 1) / 2];
    }

    const ans = new Array(k).fill(0);
    let freq = new Array(k).fill(0);

    for (const x of nums) {
        const r = x % k;
        const freq2 = new Array(k).fill(0);

        ans[r]++;

        for (let j = 0; j < k; j++) {
            const prod = (j * r) % k;

            freq2[prod] += freq[j];
            ans[prod] += freq[j];
        }

        freq2[r]++;
        freq = freq2;
    }

    return ans;
};