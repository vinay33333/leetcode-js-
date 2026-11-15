/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let even_digit=1;
    let odd_digit=0;
    let n=arr.length;
    let curr_sum=0;
    let mod=1000000007;
    let cnt=0;
    for(let i=0;i<n;i++){
        curr_sum+=arr[i];
        if(curr_sum%2!==0){
            cnt=(cnt+even_digit)%mod;
            odd_digit++;
        }else {
            cnt=(cnt+odd_digit)%mod;
            even_digit++;
        }
    }
    return cnt;
};