/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const rowServerCount = new Array(rows).fill(0);
    const colServerCount = new Array(cols).fill(0);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                rowServerCount[row]++;
                colServerCount[col]++;
            }
        }
    }
    let connectedServers = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1 && (rowServerCount[row] > 1 || colServerCount[col] > 1)) {
                connectedServers++;
            }
        }
    }
    return connectedServers;
};