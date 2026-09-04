/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let n=nums.length;
    let min_ele=Infinity;
    let min_ele_i=new Array(n);
    for(let i=n-1;i>=0;i--){
        min_ele=Math.min(min_ele,nums[i]);
        min_ele_i[i]=min_ele;
    }
    let max_ele=-Infinity;
    for(let i=0;i<=n;i++){
        max_ele=Math.max(max_ele,nums[i]);
        let res=max_ele-min_ele_i[i];
        if(res<=k){
            return i;
        }
    }
    return -1;
};