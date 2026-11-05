/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let n=arr1.length;
    let m=arr2.length;
    let cnt=0;
    for(let i=0;i<n;i++){
        let flag=true;
        for(let j=0;j<m;j++){
            if(Math.abs(arr1[i] -arr2[j] ) <=d){
                flag=false;
                break;
            }
        }
        if(flag) {
            flag=true;
            cnt=cnt+1;
        }
    }
    return cnt;
};