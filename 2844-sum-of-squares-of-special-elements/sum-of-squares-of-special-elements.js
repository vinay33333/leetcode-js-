/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let t_sum=0;
    let n=nums.length;
    for(let i=1;i<=n;i++){
        if(n%i===0){
            let p_val=nums[i-1];
            t_sum=t_sum+p_val*p_val;
        }
    }
    return t_sum;
};