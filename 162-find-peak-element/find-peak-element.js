/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n=nums.length;
    if(n===1) return 0;
    if(nums[0] >nums[1]) return 0;
    if(nums[n-1] >nums[n-2]) return n-1;
    let l=1;
    let h=n-2;
    while(l<=h){
        let m=Math.floor((l+h)/2);
        if(nums[m] >nums[m-1] &&nums[m+1]<nums[m]) return m;
        else if(nums[m] > nums[m-1]) l=m+1;
        else h=m-1;
    }
    return -1;
};