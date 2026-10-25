/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols) {
            return false;
        }
        if (grid[r][c] === 1) {
            return true;
        }

        grid[r][c] = 1;

        let left = dfs(r, c - 1);
        let right = dfs(r, c + 1);
        let up = dfs(r - 1, c);
        let down = dfs(r + 1, c);

        return left && right && up && down;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
                if (grid[r][c] === 0) {
                    dfs(r, c);
                }
            }
        }
    }

    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 0) {
                if (dfs(r, c)) {
                    count++;
                }
            }
        }
    }

    return count;
};