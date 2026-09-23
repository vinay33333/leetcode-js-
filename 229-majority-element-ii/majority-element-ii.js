/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let new_map=new Map();
    let n=nums.length;
    let limit=Math.floor(n/3);
    let res=[];
    for(let i=0;i<n;i++){
        if(new_map.has(nums[i])){
            new_map.set(nums[i],new_map.get(nums[i]) +1);
        }else{
            new_map.set(nums[i],1);
        }
    }
    for(let [k,val] of new_map){
        if(limit<val) {
            res.push(k);
        }
    }
    return res;
};