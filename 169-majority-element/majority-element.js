/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max_ele=nums[0];
    let cnt=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]===max_ele){
            cnt++;
        }else{
            cnt=cnt-1;
        }


        if(cnt===0){
            max_ele=nums[i];
            cnt=1;
        }
    }
    return max_ele;
};