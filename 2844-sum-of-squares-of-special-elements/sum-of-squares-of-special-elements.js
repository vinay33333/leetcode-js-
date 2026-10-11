/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let total_sum=0;
    let n=nums.length;
    for(let i=0;i<n;i++){
        let pos=i+1;
        if(n%pos ===0){
            let val=nums[i];
            total_sum=total_sum+val*val;
        }
    }
    return total_sum;
};