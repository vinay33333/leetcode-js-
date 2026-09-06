/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let n=intervals.length;
    let cnt=0;
    intervals.sort((a,b)=>a[1]-b[1]);
    let last=-Infinity;
    for(let i=0;i<n;i++){
        let start=intervals[i][0];
        if(start >=last){
            cnt=cnt+1;
            last=intervals[i][1];}
    }
    let res=n-cnt;
    return res;
};