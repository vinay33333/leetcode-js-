/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let ans=[];
    let n=nums1.length;
    let m=nums2.length;
    let v=new Array(nums2.length).fill(0);
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(nums1[i]===nums2[j] &&v[j]===0){
                ans.push(nums1[i]);
                v[j]=1;
                break;
            }
        }
    }
    return ans;
};