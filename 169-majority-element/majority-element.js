/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res=0;
    let cnt=0
    for(let i=0;i<nums.length;i++){
        if(cnt===0){
            res=nums[i];
        }
        if(nums[i]===res) cnt++;
        else cnt--;
    }
    return res;
};