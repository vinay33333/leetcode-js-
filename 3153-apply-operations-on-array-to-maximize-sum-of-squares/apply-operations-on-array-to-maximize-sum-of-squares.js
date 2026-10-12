/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
    const MOD = 1000000007;
    const bitCount = new Array(31).fill(0);

    // Step 1: Count the set bits at each position across all numbers
    for (let num of nums) {
        for (let i = 0; i <= 30; i++) {
            if ((num & (1 << i)) !== 0) {
                bitCount[i]++;
            }
        }
    }

    let totalSum = 0n;
    const bigMod = BigInt(MOD);

    // Step 2: Greedily construct k numbers to maximize individual values
    for (let i = 0; i < k; i++) {
        let currentNum = 0;
        for (let bit = 0; bit <= 30; bit++) {
            if (bitCount[bit] > 0) {
                currentNum |= (1 << bit);
                bitCount[bit]--;
            }
        }
        totalSum = (totalSum + BigInt(currentNum) * BigInt(currentNum)) % bigMod;
    }

    return Number(totalSum);
};