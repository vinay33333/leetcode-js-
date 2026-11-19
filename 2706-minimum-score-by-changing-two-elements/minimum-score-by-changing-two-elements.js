/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    let n=nums.length;
    nums.sort((a,b)=>a-b);
    let case_1=nums[n-2]-nums[1];
    let case_2=nums[n-3]-nums[0];
    let case_3=nums[n-1]-nums[2];
    return Math.min(case_1,case_2,case_3);
};