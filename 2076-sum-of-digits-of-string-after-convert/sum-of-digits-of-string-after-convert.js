/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str_conv="";
    for(let i=0;i<s.length;i++){
        let str_no=s.charCodeAt(i)-96;
        str_conv=str_conv+String(str_no);
    }
    let ans=0;
    for(let i=0;i<str_conv.length;i++){
        ans=ans+Number(str_conv[i]);
    }
    k--;
    while(k>0){
        let str=String(ans);
        let sum=0;
        for(let i=0;i<str.length;i++){
            sum=sum+Number(str[i]);
        }
        ans=sum;
        k=k-1;
    }
    return ans;

};