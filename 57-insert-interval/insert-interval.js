/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res=[];
    let n=intervals.length;
    let i=0;
    //left position dir - basic non overlapping...
    while(i<n &&newInterval[0] > intervals[i][1] ){
        res.push(intervals[i]);
        i=i+1;
    }
    //middle entire range min,max
    while(i<n&&newInterval[1] >= intervals[i][0]){
        newInterval[0]=Math.min(newInterval[0],intervals[i][0]);
        newInterval[1]=Math.max(newInterval[1],intervals[i][1]);
        i++;
    }
    res.push(newInterval);
    //right remaining ele that do not satisfy above cond!
    while(i<n){
        res.push(intervals[i]);
        i++;
    }
    return res;
};