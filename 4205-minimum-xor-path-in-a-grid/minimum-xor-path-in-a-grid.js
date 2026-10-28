/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let present = grid;
    let min = Infinity;
    // let visit = Array.from({length:m},()=>
    //     Array.from({length:n},()=>new Set())
    // );
    let visit = [];
    for(let i = 0 ; i<m;i++){
        visit[i] = [];
        for(let j=0;j<n;j++){
            visit[i][j] = new Set();
        }
    }
    function dfs_oper(i,j,xor){
        xor = xor ^ grid[i][j];
        if(visit[i][j].has(xor)) return;
        visit[i][j].add(xor);
        if(i === m-1 && j === n-1){
            min = Math.min(min , xor);
            return;
        }
        if(i+1 < m){
            dfs_oper(i+1,j,xor);
        }
        if(j+1<n){
            dfs_oper(i,j+1,xor);
        }
    }
    dfs_oper(0,0,0);
    return min;
};