/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max_cnt=0;
    let new_map=new Map();
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            new_map.set(1,(new_map.get(1)||0)+1);
            max_cnt=Math.max(max_cnt,new_map.get(1));
        }else new_map.set(1,0);

    }
    return max_cnt;
};