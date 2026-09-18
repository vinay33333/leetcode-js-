/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let ptr1=0;
    let ptr2=0;
    let n3=[];
    nums1.sort((n,m)=>n-m);
    nums2.sort((n,m)=>n-m);
    while(ptr1<nums1.length&&ptr2<nums2.length){
        if(nums1[ptr1]===nums2[ptr2]){
            n3.push(nums1[ptr1]);
            ptr1++;
            ptr2++;
        }else if(nums1[ptr1]>nums2[ptr2]) ptr2++;
        else ptr1++;
    }
    return n3;
};