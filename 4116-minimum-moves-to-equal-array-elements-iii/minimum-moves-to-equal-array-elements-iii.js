/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const max = Math.max(...nums);
    return nums.reduce((totalMoves, num) => totalMoves + (max - num), 0);
};