/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let n=points.length;
    let cnt=1;
    points.sort((a,b)=>a[1]-b[1]);
    let last_ele=points[0][1];
    for(let i=0;i<n;i++){
        if(points[i][0] > last_ele){
            cnt=cnt+1;
            last_ele=points[i][1];
        }
    }
    return cnt;
};