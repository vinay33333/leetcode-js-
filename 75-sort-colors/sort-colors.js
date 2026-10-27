/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero_cnt=0;
    let one_cnt=0;
    let sec_cnt=0;
    let n=nums.length;
    for(let i=0;i<n;i++){
        if(nums[i]===0) zero_cnt++;
        else if(nums[i]===1) one_cnt++;
        else sec_cnt++;
    }
    let i=0;
    while(zero_cnt >0){
        nums[i]=0;
        i=i+1;
        zero_cnt=zero_cnt-1;
    }
    while(one_cnt > 0){
        nums[i]=1;
        i++;
        one_cnt--;
    }
    while(sec_cnt >0){
        nums[i]=2;
        i++;
        sec_cnt--;
    }
};