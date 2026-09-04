/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let n=nums.length;
    for(let i=0;i<n;i++){
        let max_ele=-Infinity;
        let min_ele=Infinity;
        for(let j=0;j<=i;j++){
            max_ele=Math.max(max_ele,nums[j]);
        }
        for(let j=i;j<=n-1;j++){
            min_ele=Math.min(min_ele,nums[j])
        }
        let res=max_ele-min_ele;
        if(res<=k){
            return i;
        }
    }
    return -1;
};