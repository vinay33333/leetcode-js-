/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    let i=0;
    let curr=0;
    let ans=Infinity;
    let n=arr.length;
    let best=new Array(n).fill(Infinity);
    for(let j=0;j<n;j++){
        curr=curr+arr[j];
        while(curr>target){
            curr=curr-arr[i];
            i=i+1;
        }
        if(j>0) best[j]=best[j-1];
        if(curr===target){
            let len=j-i+1;
            if(i>0&&best[i-1]!==Infinity){
                ans=Math.min(ans,len+best[i-1]);
            }
            best[j]=Math.min(best[j],len);
        }
    }
    if(ans===Infinity) return -1;
    return ans;
};