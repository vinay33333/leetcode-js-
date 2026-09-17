/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt=0;
    let max_range=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            cnt=cnt+1;
            max_range=Math.max(max_range,cnt);
        }else{
            cnt=0;
        }
    }
    return max_range;
};