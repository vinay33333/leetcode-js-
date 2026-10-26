/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    let count = 0;
    
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            // If we find an unvisited land cell
            if (grid[r][c] > 0 && !visited[r][c]) {
                let islandSum = 0;
                let queue = [[r, c]];
                visited[r][c] = true;
                let head = 0;
                
                // BFS to traverse the entire island
                while (head < queue.length) {
                    const [currR, currC] = queue[head++];
                    islandSum += grid[currR][currC];
                    
                    for (let i = 0; i < 4; i++) {
                        const nr = currR + dr[i];
                        const nc = currC + dc[i];
                        
                        if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] > 0 && !visited[nr][nc]) {
                            visited[nr][nc] = true;
                            queue.push([nr, nc]);
                        }
                    }
                }
                
                // Check if the total value of the island is divisible by k
                if (islandSum % k === 0) {
                    count++;
                }
            }
        }
    }
    
    return count;
};