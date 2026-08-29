/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let n=intervals.length;
    let last_ele=-Infinity;
    let cnt=0;
    intervals.sort((a,b)=>a[1]-b[1]);
    for(let i=0;i<n;i++){
        if(intervals[i][0] >= last_ele){
            cnt=cnt+1;
            last_ele=intervals[i][1];
        }
    }
    let res=intervals.length-cnt;
    return res;
};