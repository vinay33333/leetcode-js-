/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let n=intervals.length;
    let res=[];
    intervals.sort((a,b)=>a[0]-b[0]);
    res.push(intervals[0]);
    for(let i=1;i<n;i++){
        let last_ele=res[res.length-1];
        if(intervals[i][0] > last_ele[1]){
            res.push(intervals[i]);
        }else{
            last_ele[0]=Math.min(last_ele[0] , intervals[i][0]);
            last_ele[1]=Math.max(last_ele[1] , intervals[i][1]);
        }
    }
    return res;
};