/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let inc_arr=1;
    let dec_arr=1;
    let inc_max=1;
    let dec_max=1;
    let n=nums.length;
    for(let i=0;i<n-1;i++){
        if(nums[i] < nums[i+1]){
            inc_arr=inc_arr+1;
            dec_arr=1;
        }else if(nums[i] > nums[i+1]){
            dec_arr++;
            inc_arr=1;
        }else {
            inc_arr=1;
            dec_arr=1;
        }
        inc_max=Math.max(inc_max , inc_arr);
        dec_max=Math.max(dec_max , dec_arr);
    }
    let ans=Math.max(inc_max,dec_max);
    return ans;
};