/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function(classroom, maxEnergy) {
    const m = classroom.length;
    const n = classroom[0].length;
    
    let startR = -1, startC = -1;
    const lCells = [];
    
    // Grid tracking to map 'L' cells directly to their bitwise masks
    const lMask = Array.from({ length: m }, () => new Uint16Array(n));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (classroom[i][j] === 'S') {
                startR = i; 
                startC = j;
            } else if (classroom[i][j] === 'L') {
                lMask[i][j] = (1 << lCells.length);
                lCells.push({r: i, c: j});
            }
        }
    }
    
    const numL = lCells.length;
    const targetMask = (1 << numL) - 1;
    
    if (numL === 0) return 0; // If there is no litter to collect
    
    // Allocate a flat TypedArray for the 'dist' (visited). Maximum required size fits into 2^26
    // Encoding: (r << 21) | (c << 16) | (energy << 10) | mask
    // Using dist array to store (actual distance + 1) to treat 0 as an 'unvisited' default state
    const dist = new Uint16Array(1 << 26);
    
    const startState = (startR << 21) | (startC << 16) | (maxEnergy << 10) | 0;
    dist[startState] = 1;
    
    // Allocate typed queue statically (size safely beyond expected realistically achievable states)
    const q = new Uint32Array(25000000); 
    let head = 0, tail = 0;
    q[tail++] = startState;
    
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    
    while (head < tail) {
        const curr = q[head++];
        
        // Decode states
        const mask = curr & 1023;
        const e = (curr >> 10) & 63;
        const c = (curr >> 16) & 31;
        const r = (curr >> 21) & 31;
        const d = dist[curr];
        
        // If all 'L' are collected
        if (mask === targetMask) {
            return d - 1; 
        }
        
        // If current energy is 0, we are trapped (cannot make further moves) unless stepping off triggered earlier win
        if (e === 0) continue;
        
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                const cell = classroom[nr][nc];
                
                if (cell === 'X') continue;
                
                let ne = e - 1;
                let nmask = mask;
                
                if (cell === 'R') {
                    ne = maxEnergy;
                } else if (cell === 'L') {
                    nmask |= lMask[nr][nc];
                }
                
                const nstate = (nr << 21) | (nc << 16) | (ne << 10) | nmask;
                
                // If this completely new state remains unvisited
                if (dist[nstate] === 0) {
                    dist[nstate] = d + 1;
                    q[tail++] = nstate;
                }
            }
        }
    }
    
    return -1; // Path exhaustible without fully clearing the litter targets
};