/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, tar) {
    // nums.sort((a,b)>a-b);
    nums.sort((a,b)=>a-b);
    let ans=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]===tar){
            ans.push(i);
        }
    }
    return ans;
};