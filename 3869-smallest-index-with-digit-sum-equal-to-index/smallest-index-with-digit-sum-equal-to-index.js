/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        let resSum = String(nums[i]).split("").reduce((acc,d)=> acc+Number(d),0);
        if(resSum===i){
            return i;
        }
    }
    return -1;
};