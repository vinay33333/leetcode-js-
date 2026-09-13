/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(A, B) {
    let n=A.length;
    let max_overlaps=0;
    function cnt_overlaps_fun(A,B,row_off,col_off){
        let cnt=0;
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                let bi=i+row_off;
                let bj=j+col_off;
                if(bi<0||bi>=n||bj<0||bj>n) continue;
                if(A[i][j]===1 &&B[bi][bj]===1) {
                    cnt=cnt+1;
                }
            }
        }
        return cnt;
    }
    for(let row_off=-n+1;row_off<n;row_off++){
        for(let col_off=-n+1;col_off<n;col_off++){
            let cnt=cnt_overlaps_fun(A,B,row_off,col_off);
            max_overlaps=Math.max(max_overlaps , cnt);
        }
    }
    return max_overlaps;
};