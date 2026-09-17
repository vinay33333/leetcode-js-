/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let new_map=new Map();
    let n=nums.length;
    for(let i=0;i<n;i++){
        let res=target-nums[i];
        if(!new_map.has(res)){
            new_map.set(nums[i],i);
        }else{
            return [new_map.get(res),i];
        }
    }
};