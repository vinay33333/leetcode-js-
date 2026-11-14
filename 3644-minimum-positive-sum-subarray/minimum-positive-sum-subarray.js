/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    let n=nums.length;
    let ans=Infinity;
    for(let i=0;i<n;i++){
        let c_sum=0;
        for(let j=i;j<n&&j-i+1<=r;j++){
            c_sum+=nums[j];
            if(c_sum>0 &&j-i+1>=l) {
                ans=Math.min(ans,c_sum);
            }
        }
    }
    if(ans===Infinity) return -1;
    else return ans;
};