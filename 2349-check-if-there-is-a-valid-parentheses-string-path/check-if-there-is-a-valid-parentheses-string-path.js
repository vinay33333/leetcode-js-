/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    if ((m + n) % 2 === 0 || grid[0][0] === ')' || grid[m - 1][n - 1] === '(') {
        return false;
    }
    
    const memo = Array.from({ length: m }, () => 
        Array.from({ length: n }, () => new Set())
    );
    
    function dfs(r, c, balance) {
        if (grid[r][c] === '(') {
            balance++;
        } else {
            balance--;
        }
        
        if (balance < 0) {
            return false;
        }
        
        if (r === m - 1 && c === n - 1) {
            return balance === 0;
        }
        
        if (memo[r][c].has(balance)) {
            return false;
        }
        
        if (r + 1 < m) {
            if (dfs(r + 1, c, balance)) {
                return true;
            }
        }
        
        if (c + 1 < n) {
            if (dfs(r, c + 1, balance)) {
                return true;
            }
        }
        
        memo[r][c].add(balance);
        return false;
    }
    
    return dfs(0, 0, 0);
};