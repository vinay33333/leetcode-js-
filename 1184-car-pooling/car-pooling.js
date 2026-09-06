/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let n=trips.length;
    let pickup=[];
    let drop=[];
    for(let i=0;i<n;i++){
        pickup.push([trips[i][1] , trips[i][0]]);
        drop.push([trips[i][2],trips[i][0]]);
    }
    pickup.sort((a,b)=>a[0]-b[0]);
    drop.sort((a,b)=>a[0]-b[0]);
    let i=0;
    let j=0;
    let cnt=0;
    while(i<n&&j<n){
        if(pickup[i][0] < drop[j][0]){
            cnt=cnt+pickup[i][1];
            if(capacity < cnt){
                return false;
            }
            i=i+1;
        }else{
            cnt=cnt-drop[j][1];
            j=j+1;
        }
    }
    return true;
};