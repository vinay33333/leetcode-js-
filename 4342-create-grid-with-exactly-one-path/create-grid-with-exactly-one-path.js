/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(n,m) {
    let g=[];
    for(let i=0;i<n;i++){
        g.push(Array(m).fill('#'));
    }
    for(let k=0;k<m;k++){
        g[0][k]='.';
    }
    for(let i=0;i<n;i++){
        g[i][m-1]='.';
    }
    for(let i=0;i<n;i++){
        g[i]=g[i].join("");
    }
    return g;
};