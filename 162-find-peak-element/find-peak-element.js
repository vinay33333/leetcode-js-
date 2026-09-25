/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n=nums.length;
    for(let i=0;i<n;i++){
        let left=(i===0||nums[i-1]<nums[i]);
        let right=(i===n-1 ||nums[i]>nums[i+1]);
        if(left&&right) return i;
    }
    return -1;
};